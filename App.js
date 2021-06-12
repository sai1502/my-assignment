import "./App.css";
//Imported all the requirements from ant lib official documentation
import { Layout, Menu, Breadcrumb, Input } from "antd";
import Title from "antd/lib/typography/Title";
import Avatar from "antd/lib/avatar/avatar";

import {
  MailOutlined,
  AppstoreOutlined,
  PlayCircleOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      {/* Selected the best layout, which meets our requirements */}

      <Layout>
        <Header style={{ padding: 5 }}>
          <Avatar style={{ float: "right", margin: 10 }} src="./userDp.png" />
          <Input
            style={{ left: 135, width: 500 }}
            placeholder="Search for daries, Policies, Insured, Prospects ..."
            prefix={<UserOutlined />}
          />
          <Title
            style={{ color: "white", float: "left", padding: 10 }}
            level={3}
          >
            SAI
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Document" icon={<HomeOutlined />}>
                Documents
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title="Tasks">
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Marketing">
                <SubMenu key="sub3" title="Awesome Website">
                  <SubMenu key="sub4" title="Contact Form"></SubMenu>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub5"
                icon={<PlayCircleOutlined />}
                title="Social Media Assets"
              >
                <Menu.Item key="10">Linkdin</Menu.Item>
                <Menu.Item key="11">StackOverflow</Menu.Item>
                <Menu.Item key="12">GeekforGeeks</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Tasks</Breadcrumb.Item>
                <Breadcrumb.Item>Marketing</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "#fff", padding: 24, minHeight: 600 }}>
                {/* Generated random text lorum ipsum */}
                <h3>Awesome Website</h3>
                <br></br>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                <br></br>
                <br></br>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc. "At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga. Et
                harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat." "On the other hand,
                we denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire, that they cannot foresee the pain
                and trouble that are bound to ensue; and equal blame belongs to
                those who fail in their duty through weakness of will, which is
                the same as saying through shrinking from toil and pain. These
                cases are perfectly simple and easy to distinguish. In a free
                hour, when our power of choice is untrammelled and when nothing
                prevents our being able to do what we like best, every pleasure
                is to be welcomed and every pain avoided. But in certain
                circumstances and owing to the claims of duty or the obligations
                of business it will frequently occur that pleasures have to be
                repudiated and annoyances accepted. The wise man therefore
                always holds in these matters to this principle of selection: he
                rejects pleasures to secure other greater pleasures, or else he
                endures pains to avoid worse pains."
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2021 Created by Sai Srinivas
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
