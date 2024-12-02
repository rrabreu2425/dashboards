import { BasePageContent, BasePageHeader } from 'src/components/BaseLayout';
import { Trans } from '@lingui/macro';
import { Title } from 'src/components/Typography';
import Notice from '../components/News/PreviewLinks';
import PendingCensus from '../components/PendingCensus';
import Notifications from '../components/Notifications';
import MonthlySumaryScribe from '../components/MonthlySumaryScribe';
import BigCalendar from '../components/BigCalendar'
function HomeScribe(){
    return(<>
    <BasePageHeader style={{ paddingTop: 35, paddingBottom: 10 }}>
      <Title style={{ marginBottom: 40 }}>
        <Trans>Welcome Scriber Team Member!</Trans>
      </Title>
    </BasePageHeader>

    <div className="home">

      <div className="column column1">
        <div className="rectangulo1">
          <Notice />
          <PendingCensus/>
        </div>
        <div className='containerDown'>
          <div className="rectangulo2">
            <BigCalendar/>
          </div>
          <div className="rectangulo3">
          <MonthlySumaryScribe/>
          </div>
        </div>
      </div>
      <div className='column column2'>
        <div className='rectangulo4'>
          <Notifications />
        </div>
      </div>
    </div>
    </>)
}
export default HomeScribe