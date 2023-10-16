import {
  Body,
  // Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = '/static'
// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "/static";

const OrderSuccessful = ({
  userFirstName,
  tickets,
  time,
  location,
  orderTotal,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Otaku Connect 2023</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img style={{ width: "100px" }} src={`${baseUrl}/logo.png`} />
            {/* <Img style={{ width: "100px" }} src=" https://drive.google.com/uc?export=view&id=1c4jDRVErxZZ41h0XyoVttwaehfhvzAN" /> */}
          </Section>

          <Section style={content}>
            <Img width={620} src={`${baseUrl}/email-banner.jpg`} />

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {userFirstName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  You&apos;ve Got Ticket(s)! More Info Below
                </Heading>

                <Text style={paragraph}>{time}</Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Location: </b>
                  {location}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Your Tickets: </b>
                </Text>
                {tickets?.map((ticket, index) => (
                  <Text key={index} style={{ ...paragraph, marginTop: -5 }}>
                    <b>{ticket}</b>
                  </Text>
                ))}
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Order Total: </b>
                  {orderTotal}
                </Text>

              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img width={620} src={`${baseUrl}/email-footer.png`} />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2023 | OtakuTv | www.otakutv.co
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default OrderSuccessful;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
  width: "100px",
};

// const containerButton = {
//   display: 'flex',
//   justifyContent: 'center',
//   width: '100%',
// };

// const button = {
//   backgroundColor: '#e00707',
//   padding: '12px 30px',
//   borderRadius: 3,
//   color: '#FFF',
//   fontWeight: 'bold',
//   border: '1px solid rgb(0,0,0, 0.1)',
//   cursor: 'pointer',
// };

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
