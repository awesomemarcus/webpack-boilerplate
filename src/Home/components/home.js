import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar';
import 'antd-mobile/lib/nav-bar/style/css';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style/css';
import Popover from 'antd-mobile/lib/popover';
import 'antd-mobile/lib/popover/style/css';
import Flex from 'antd-mobile/lib/flex';
import 'antd-mobile/lib/flex/style/css';
import Card from 'antd-mobile/lib/card';
import 'antd-mobile/lib/card/style/css';
import WingBlank from 'antd-mobile/lib/wing-blank';
import 'antd-mobile/lib/wing-blank/style/css';
import whiteSpace from 'antd-mobile/lib/white-space';
import 'antd-mobile/lib/white-space/style/css';
import WhiteSpace from 'antd-mobile/lib/white-space';
import Carousel from 'antd-mobile/lib/carousel';
import 'antd-mobile/lib/carousel/style/css';
import DatePicker from 'antd-mobile/lib/date-picker';
import 'antd-mobile/lib/date-picker/style/css';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import Forms from '../../Forms/components/forms';

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      selected: '',
      data: ['1', '2', '3'],
      imgHeight: 176,
      date: now,
    };

    this.onSelect = this.onSelect.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
      })
    }, 100);
  }

  onSelect(opt) {
    console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  }

  handleVisibleChange(visible) {
    this.setState({
      visible,
    });
  }

  render() {
    return (
      <div>
        <NavBar
          className="hey"
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: 5 }}>Help</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}>
              <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}>
                <Icon type="ellipsis" />
              </div>
          </Popover>
          }
        >NavBar</NavBar>
        <div className="flex-container">
          <Flex
            direction={'column'}>
            <Flex.Item className="w-100">
              <WingBlank size="lg">
                <WhiteSpace size="lg"/>
                <Card full>
                  <Card.Body className="p-0">
                    <Carousel
                      autoplay={true}
                      infinite
                      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                      afterChange={index => console.log(`slide to ${index}`)}>
                      {this.state.data.map(val => (
                        <a
                          href=""
                          key={val}
                          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight, touchAction: 'manipulation'}}>
                          <img
                            src={`https://picsum.photos/200/200`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                              // fire window resize event to change height
                              window.dispatchEvent(new Event('resize'));
                              this.setState({ imgHeight: 'auto' });
                            }}
                          />
                        </a>
                      ))}

                    </Carousel>
                  </Card.Body>
                  <Card.Body className="p-2">
                    <h5 className="m-0"><strong>Ickyrr Sama</strong></h5>
                    <p className="m-0"><small>Lorem ipsum dolor sit amet.</small></p>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ratione eaque incidunt corporis eligendi porro aut fugit quas? Minima, eos!</p>
                  </Card.Body>
                </Card>
              </WingBlank>
            </Flex.Item>
            <Flex.Item className="w-100">
              <WingBlank size="lg">
                <WhiteSpace size="lg"/>
                <Card>
                  <Card.Body className="p-2">
                  <DatePicker
                    mode="date"
                    locale={enUs}
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date }, () => { console.log(this.state.date) })}>
                    <List.Item arrow="horizontal">Date</List.Item>
                  </DatePicker>
                  </Card.Body>
                </Card>
              </WingBlank>
            </Flex.Item>
            <Flex.Item className="w-100">
              <WingBlank size="lg">
                <WhiteSpace size="lg"/>
                <Card>
                  <Card.Body className="p-2">
                    <Forms/>
                  </Card.Body>
                </Card>
              </WingBlank>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    );
  }
}