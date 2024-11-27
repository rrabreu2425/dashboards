import { Trans } from '@lingui/macro';
import { BasePageHeader } from 'src/components/BaseLayout';
import { Title } from 'src/components/Typography';
import BigCalendar from '../components/BigCalendar'
import Notice from '../components/News/PreviewLinks';
import MonthlySumary from '../components/MonthlySumaryProviders';
import Notifications from '../components/Notifications';
import AssignedPatients from '../components/AssignedPatients';
import '../style.css'
function HomeProvider() {  
  
  return (<>

    <BasePageHeader style={{ paddingTop: 35, paddingBottom: 10 }}>
      <Title style={{ marginBottom: 40 }}>
        <Trans>Welcome Provider!</Trans>
      </Title>
    </BasePageHeader>

    <div className="home">

      <div className="column column1">
        <div className="rectangulo1">
          <Notice />
          <AssignedPatients />
        </div>
        <div className='containerDown'>
          <div className="rectangulo2">
            <BigCalendar />
          </div>
          <div className="rectangulo3">
            <MonthlySumary />
          </div>
        </div>
      </div>
      <div className='column column2'>
        <div className='rectangulo4'>
          <Notifications />
        </div>
      </div>
    </div>

  </>
  )
}
export default HomeProvider 