

import {
  connect,
  MyHead as Head,
  get as _get,
  WidgetVisitor,
  LayoutMain as Layout,
  Typography,
  Wrapper,
 // WhoIsGonnaBeThere,
  MyTypography,
  Googlemap
} from 'eventjuicer-site-components'


class ThankyouPage extends React.Component {
  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {

    const person = `code/${query.hash}`;

    return {
      preload : [person, "exhibitors"],
      asPath: asPath
    };
  }

  render() {
    const { url, person, asPath } = this.props;

    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;

    return (
      <Layout>

        <Head
          url={asPath}
          titleLabel={[
            'visitors.opengraph.title',
            {
              name: name,
              location: 'Warszawa',
              date: '7 listopada 2018'
            }
          ]}
        />

        <Wrapper
          first
          label={['visitors.thankyou', { name: _get(person, 'fname', '') }]}
        />

        {/* <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper> */}

        <WidgetVisitor label="visitors.register_alt" />
 
        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect()(ThankyouPage);
