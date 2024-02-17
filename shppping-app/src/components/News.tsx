import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import image1 from "../assets/newsimage1.jpg";
import image2 from "../assets/newsimage2.jpg";
import image3 from "../assets/newsimage3.jpg";
import image4 from "../assets/newsimage4.jpg";

function News() {
  const data = [
    {
      image: image1,
      title: "Eco-Friendly Furniture Trends",
      text: "As sustainability continues to be a key focus, furniture designers are increasingly using eco-friendly materials like reclaimed wood, bamboo, and recycled metals. These materials not only reduce environmental impact but also add a unique and natural aesthetic to furniture pieces.",
      link: "#blog",
    },
    {
      image: image2,
      title: "Smart Furniture Integration",
      text: "With the rise of smart home technology are integrating smart features into their designs. From sofas with built-in USB chargers to coffee tables with wireless charging pads, these innovations are enhancing convenience in modern living spaces.",
      link: "#blog",
    },
    {
      image: image3,
      title: "Multifunctional Furniture Solutions",
      text: "As urban living spaces become smaller, there is a growing demand for multifunctional furniture that maximizes space efficiency. Examples include sofa beds, storage ottomans, and dining tables that can be expanded or collapsed based on the need.",
      link: "#blog",
    },
    {
      image: image4,
      title: "Artisanal Craftsmanship Resurgence",
      text: "In contrast to mass-produced furniture, there is a resurgence of interest in artisanal craftsmanship. Consumers are appreciating the quality, uniqueness, and story behind handcrafted pieces, leading to a revival of traditional furniture-making techniques and styles.",
      link: "#blog",
    },
  ];

  return (
    <div className="container" id="blog">
      <h1>Latest News.</h1>
      <Row xs={1} md={2} className="g-4">
        {data.map((item, idx) => (
          <Col key={idx} style={{ display: "flex", flexDirection: "column" }}>
            <Card style={{ flex: 1 }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <a
                    href={item.link}
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    {item.text}
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;
