import dynamic from 'next/dynamic';

import {
  connect,
  LayoutMain as Layout,
  MyHead as Head,
  MyLink as Link,
  WidgetSalesMap, 
  WidgetExhibitorBenefits, 
  WidgetVideoWithReviews,
  WidgetAllExhibitorsAvatarlist,
  //DatasourceExhibitors, 
  DatasourcePhotos,
  Wrapper,
  Gallery,
  Faq,
  // Avatarlist,
  // Typography,
  // WidthAwareInfo,
  // People,
  // GridBenefits
} from 'eventjuicer-site-components'


class PageExhibit extends React.Component {
  static async getInitialProps({

    query,
    asPath,
    isServer,
    store
  }) {

    return { preload : ["exhibitors"] };
  }

  render() {

    const { url } = this.props;

    return (
      <Layout>
        <Head />

    
     <WidgetExhibitorBenefits first label="exhibitors.benefits.title" />

     <WidgetSalesMap
          
            label="exhibitors.map.title"
            secondaryLabel="exhibitors.map.opensales"
      />
    
  
      <WidgetVideoWithReviews />

      <Wrapper label="exhibitors.faq.name">

        <Faq
          url={url}
          baseLabel="exhibitors.faq.become"
          items={[
            {
              label: 'included_services',
              important: true,
              buttons: []
            },
            { baseLabel : 'exhibitors.faq.before_event',
              label: 'additional_paid_services'
            },
            { label: 'payment' },
            { label: 'onboarding' },
            { label: 'resignation' },
            { label: 'promo_benefits' },
            {
              baseLabel : 'exhibitors.faq.before_event',
              label: 'public_profile'
            }
          ]}
        />


      </Wrapper>

      <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" />
        

      <DatasourcePhotos>{
        (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
      }</DatasourcePhotos>

      </Layout>
    );
  }
}

export default connect()(PageExhibit);
