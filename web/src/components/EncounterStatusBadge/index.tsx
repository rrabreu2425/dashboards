import { t } from '@lingui/macro';
import classNames from 'classnames';
import { Encounter, QuestionnaireResponse } from 'fhir/r4b';
import { ReactNode } from 'react';

import s from './EncounterStatusBadge.module.scss';

interface Props {
    status: Encounter['status'] | QuestionnaireResponse['status'];
}

export function StatusBadge(props: Props): ReactNode {
    const { status } = props;

    const statusHumanTitle = {
        'in-progress': t`in progress`,
        finished: t`completed`,
        completed: t`completed`,
    };

    return (
        <div
            className={classNames(s.container, {
                [s.inProgress!]: status === 'in-progress',
                [s.completed!]: status === 'finished',
                [s.completed!]: status === 'completed',
            })}
        >
            <span className={s.title}>{statusHumanTitle[status] ?? status}</span>
        </div>
    );
}
