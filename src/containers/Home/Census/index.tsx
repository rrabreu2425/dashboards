import { Trans } from '@lingui/macro';
import { BasePageContent, BasePageHeader } from 'src/components/BaseLayout';
import { Title } from 'src/components/Typography';
import BigCalendar from '../components/BigCalendar'
import Notice from '../components/News/PreviewLinks';
import MonthlySumary from '../components/MonthlySumaryAdmin';
import Notifications from '../components/Notifications';
import '../style.css'
function HomeCensus() {
  return (<>

    <BasePageHeader style={{ paddingTop: 35, paddingBottom: 10 }}>
      <Title style={{ marginBottom: 40 }}>
        <Trans>Welcome Census Team Member!</Trans>
      </Title>
    </BasePageHeader>

    <div className="home">

      <div className="column column1">
        <div className="rectangulo1">
          <Notice />
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
export default HomeCensus  