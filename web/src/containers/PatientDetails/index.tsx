import { t, Trans } from '@lingui/macro';
import { Menu, Button, notification, Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet, Route, Routes } from 'react-router-dom';

import { RenderRemoteData } from 'aidbox-react/lib/components/RenderRemoteData';
import { useService } from 'aidbox-react/lib/hooks/service';
import { getFHIRResource } from 'aidbox-react/lib/services/fhir';

import { Patient } from 'shared/src/contrib/aidbox';
import { questionnaireIdLoader } from 'shared/src/hooks/questionnaire-response-form-data';
import { renderHumanName } from 'shared/src/utils/fhir';

import { BaseLayout, BasePageContent, BasePageHeader } from 'src/components/BaseLayout';
import { RouteItem } from 'src/components/BaseLayout/Header';
import Breadcrumbs from 'src/components/Breadcrumbs';
import { ModalTrigger } from 'src/components/ModalTrigger';
import { PatientEncounter } from 'src/components/PatientEncounter';
import { PatientGeneralInfo } from 'src/components/PatientGeneralInfo';
import { QuestionnaireResponseForm } from 'src/components/QuestionnaireResponseForm';

import s from './PatientDetails.module.scss';
import { PatientDocument } from './PatientDocument';
import { PatientDocumentDetails } from './PatientDocumentDetails';
import { PatientDocuments } from './PatientDocuments';

export const PatientDetails = () => {
    const location = useLocation();
    const params = useParams<{ id: string }>();

    const [currentPath, setCurrentPath] = useState(location?.pathname);

    const [patientResponse, manager] = useService(
        async () => await getFHIRResource<Patient>({ resourceType: 'Patient', id: params.id! }),
    );

    const menuItems: RouteItem[] = [
        { title: t`Demographics`, path: `/patients/${params.id}` },
        { title: t`Encounters`, path: `/patients/${params.id}/encounters` },
        { title: t`Documents`, path: `/patients/${params.id}/documents` },
    ];

    const getGeneralInfo = (patient: Patient) => [
        [
            { title: t`Birth date`, value: patient.birthDate },
            {
                title: t`SSN`,
                value:
                    patient.identifier?.[0]!.system === '1.2.643.100.3'
                        ? patient.identifier?.[0].value
                        : t`Missing`,
            },
            { title: t`Passport data`, value: t`Missing` },
        ],
        [{ title: t`Phone number`, value: patient.telecom?.[0]!.value }],
        [
            {
                title: t`Sex`,
                value:
                    patient.gender === 'male'
                        ? t`Male`
                        : patient.gender === 'female'
                        ? t`Female`
                        : t`Missing`,
            },
        ],
    ];

    const getCurrentPathName = () => {
        if (location?.pathname.indexOf('encounters') !== -1) {
            return t`Encounters`;
        }

        if (location?.pathname.indexOf('documents') !== -1) {
            return t`Documents`;
        }

        return t`General information`;
    };

    const crumbs = (patient: Patient) => [
        {
            path: '/patients',
            name: t`Patients`,
        },
        {
            path: `/patients/${params.id}`,
            name: renderHumanName(patient.name?.[0]),
        },
        {
            path: `/patients/${params.id}`,
            name: getCurrentPathName(),
        },
    ];

    useEffect(() => {
        setCurrentPath(location?.pathname);
    }, [location]);

    const renderMenu = () => {
        return (
            <Menu
                mode="horizontal"
                theme="light"
                selectedKeys={[currentPath.split('/').slice(0, 4).join('/')]}
                className={s.menu}
                items={menuItems.map((route) => ({
                    key: route.path,
                    label: <Link to={route.path}>{route.title}</Link>,
                }))}
            />
        );
    };

    return (
        <RenderRemoteData remoteData={patientResponse}>
            {(patient) => {
                const generalInfo = getGeneralInfo(patient);
                const phoneNumber =
                    patient.telecom && patient.telecom.length > 0
                        ? patient.telecom.filter(({ system }) => system === 'mobile')[0]!.value
                        : undefined;

                return (
                    <BaseLayout>
                        <BasePageHeader style={{ paddingBottom: 0 }}>
                            <Breadcrumbs crumbs={crumbs(patient)} />
                            <Row
                                justify="space-between"
                                align="middle"
                                style={{ marginBottom: 21 }}
                            >
                                <Col>
                                    <Title style={{ marginBottom: 0 }}>
                                        {renderHumanName(patient.name?.[0])}
                                    </Title>
                                </Col>
                                <Col
                                    flex={1}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        gap: 16,
                                    }}
                                >
                                    {patient.birthDate && <div>{patient.birthDate}</div>}
                                    {phoneNumber && <div>+{phoneNumber}</div>}
                                    <ModalTrigger
                                        title={t`Edit patient`}
                                        trigger={
                                            <Button type="link">
                                                <Trans>Edit</Trans>
                                            </Button>
                                        }
                                    >
                                        {({ closeModal }) => (
                                            <QuestionnaireResponseForm
                                                questionnaireLoader={questionnaireIdLoader(
                                                    'patient-edit',
                                                )}
                                                launchContextParameters={[
                                                    { name: 'Patient', resource: patient },
                                                ]}
                                                onSuccess={() => {
                                                    notification.success({
                                                        message: t`Patient saved`,
                                                    });
                                                    manager.reload();
                                                    closeModal();
                                                }}
                                            />
                                        )}
                                    </ModalTrigger>
                                </Col>
                            </Row>
                            {renderMenu()}
                        </BasePageHeader>
                        <BasePageContent>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <>
                                            <Outlet />
                                        </>
                                    }
                                >
                                    <Route
                                        path="/"
                                        element={<PatientGeneralInfo generalInfo={generalInfo} />}
                                    />
                                    <Route
                                        path="/encounters"
                                        element={<PatientEncounter patient={patient} />}
                                    />
                                    <Route
                                        path="/documents"
                                        element={<PatientDocuments patient={patient} />}
                                    />
                                    <Route
                                        path="/documents/new/:questionnaireId"
                                        element={<PatientDocument patient={patient} />}
                                    />
                                    <Route
                                        path="/documents/:qrId"
                                        element={<PatientDocumentDetails patient={patient} />}
                                    />
                                </Route>
                            </Routes>
                        </BasePageContent>
                    </BaseLayout>
                );
            }}
        </RenderRemoteData>
    );
};
