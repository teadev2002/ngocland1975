 
import { useState } from "react";
import {
  Phone,
  MapPin,
  CheckCircle,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Carousel,
  Image,
} from "react-bootstrap";
import "./HomeStyles.scss";
import posterImage from "../../assets/img/poster.jpg";
import image1 from "../../assets/img/gate.jpg";
import image2 from "../../assets/img/3.jpg";
import image3 from "../../assets/img/4.jpg";
import image4 from "../../assets/img/baidatsau.jpg";
import image5 from "../../assets/img/ao.jpg";
import image6 from "../../assets/img/house.jpg";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    needs: "",
  });

  const landImages = [image1, image2, image3, image4, image5, image6];

  const amenities = [
    { name: "International School", distance: "2km", icon: "🏫" },
    { name: "Shopping Mall", distance: "1.5km", icon: "🏬" },
    { name: "General Hospital", distance: "3km", icon: "🏥" },
    { name: "Metro Station", distance: "1km", icon: "🚇" },
    { name: "Park & Recreation", distance: "500m", icon: "🌳" },
    { name: "Banking Center", distance: "1.2km", icon: "🏦" },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Investor",
      image: image1,
      content:
        "GreenLand helped me find the perfect investment property. The location is excellent and the ROI has exceeded my expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Developer",
      image: image2,
      content:
        "Professional service and transparent process. The land documentation was complete and the team guided us through every step of the purchase.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      image: image3,
      content:
        "As a first-time land buyer, I was nervous about the process. GreenLand made it simple and stress-free. Great investment opportunity!",
      rating: 5,
    },
  ];

  const investmentCalculator = {
    landPrice: 2500000,
    appreciationRate: 8,
    years: 5,
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  
  const calculateInvestmentReturn = () => {
    const futureValue =
      investmentCalculator.landPrice *
      Math.pow(1 + investmentCalculator.appreciationRate / 100, investmentCalculator.years);
    const totalReturn = futureValue - investmentCalculator.landPrice;
    const roi = ((futureValue - investmentCalculator.landPrice) / investmentCalculator.landPrice) * 100;
    return { futureValue, totalReturn, roi };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({ name: "", phone: "", needs: "" });
  };

  return (
    <div className="real-estate-landing">
      {/* Header */}
      <Navbar bg="light" expand="md" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand>
            <h1 className="logo-text">Ngọc Land</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-none d-md-flex align-items-center">
              <div className="d-flex align-items-center me-3">
                <Phone size={20} className="text-success me-2" />
                <span className="text-success fw-semibold">0902715456</span>
              </div>
              <Nav.Link onClick={() => scrollToSection("hero")}>Trang chủ</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("land-info")}>Thông tin đất</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("location")}>Vị trí đất</Nav.Link>
              {/* <Nav.Link onClick={() => scrollToSection("amenities")}>Tiện nghi</Nav.Link> */}
              <Nav.Link onClick={() => scrollToSection("gallery")}>Hình ảnh vườn</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("calculator")}>Mức giá</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>  </Nav.Link>
            </Nav>
            <Nav className="d-md-none">
              <div className="d-flex align-items-center justify-content-center py-3 border-bottom">
                <Phone size={20} className="text-success me-2" />
                <span className="text-success fw-semibold">Zalo: 0902715456</span>
              </div>
               <Nav.Link onClick={() => scrollToSection("hero")}>Trang chủ</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("land-info")}>Thông tin đất</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("location")}>Vị trí đất</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("amenities")}>Amenities</Nav.Link>
             <Nav.Link onClick={() => scrollToSection("gallery")}>Hình ảnh vườn</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("calculator")}>Mức giá</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <Image
            src={posterImage}
            alt="Beautiful land for investment"
            className="hero-image"
            fluid
          />
        </div>
        <div className="hero-content text-center text-white" style={{textAlign: "center"}}>
          <Container>
           
            
           
          </Container>
        </div>
      </section>

      {/* Land Information */}
      <section id="land-info" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Thông tin đất</h2>
            
      
          </div>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="info-icon">📏</div>
                  <Card.Title>Tổng diện tích</Card.Title>
                  <Card.Text className="info-value">5 héc ta</Card.Text>
                  <Card.Text>
                    1,2 hecta sầu riêng đang thu hoạch, 1 ao cá 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="info-icon">📋</div>
                  <Card.Title>Tình trạng pháp lý</Card.Title>
                  <Card.Text className="info-value">Giấy tờ đầy đủ</Card.Text>
                  <Card.Text>Có sổ hồng rõ ràng</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="info-icon">💰</div>
                  <Card.Title>Mức giá thuê</Card.Title>
                  <Card.Text className="info-value">250 triệu/ năm</Card.Text>
                  <Card.Text>Mức giá có thể thương lượng</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="info-icon">⭐</div>
                  <Card.Title>Ưu điểm chính</Card.Title>
                  <div className="advantages-list text-start">
                    <div className="advantage-item d-flex align-items-center mb-2">
                      <CheckCircle size={16} className="text-success me-2" />
                      <span>Đất trồng trọt rộng rãi, màu mỡ</span>
                    </div>
                    <div className="advantage-item d-flex align-items-center mb-2">
                      <CheckCircle size={16} className="text-success me-2" />
                      <span>Ao cá </span>
                    </div>
                    <div className="advantage-item d-flex align-items-center">
                      <CheckCircle size={16} className="text-success me-2" />
                      <span>Có nhà ở</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Location & Map */}
      <section id="location" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Vị trí đất</h2>
            
          </div>
           <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244.54801515164053!2d106.27557589208475!3d11.278439438213727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1750093388884!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
          <Row className="align-items-center" style={{ marginTop: "4vh" }}>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm mb-3">
                <Card.Body className="d-flex align-items-start">
                  <MapPin size={24} className="text-success me-3" />
                  <div >
                    <Card.Title>Địa chỉ</Card.Title>
                    <Card.Text>
                    77HG+95 Dương Minh Châu District, Tây Ninh, Vietnam
                      <img src="https://i.postimg.cc/WzyKCb80/gate.jpg" alt="Location map" className="img-fluid mt-2" />
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              {/* <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Location Highlights</Card.Title>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ 15 minutes to city center</li>
                    <li className="mb-2">✓ Direct highway access</li>
                    <li className="mb-2">✓ Planned metro extension nearby</li>
                    <li className="mb-2">✓ Growing business district</li>
                    <li>✓ Future development zone</li>
                  </ul>
                </Card.Body>
              </Card> */}
            </Col>
            <Col md={6} className="mb-4">
              <div className="position-relative rounded shadow">
                 
                <div className="map-marker position-absolute top-50 start-50 translate-middle">
                 
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Surrounding Amenities */}
      {/* <section id="amenities" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Surrounding Amenities</h2>
            <p className="section-subtitle">Everything you need within reach</p>
          </div>
          <Row>
            {amenities.map((amenity, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="h-100 shadow-sm text-center">
                  <Card.Body>
                    <div className="amenity-icon mb-3">{amenity.icon}</div>
                    <Card.Title>{amenity.name}</Card.Title>
                    <Card.Text className="text-success">{amenity.distance} away</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      {/* Image Gallery */}
      <section id="gallery" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Property Gallery</h2>
            <p className="section-subtitle">See the beauty and potential of this premium land</p>
          </div>
          <Carousel
            activeIndex={currentImageIndex}
            onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}
            className="mb-4 shadow"
          >
            {landImages.map((image, index) => (
              <Carousel.Item key={index}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Land view ${index + 1}`}
                  className="d-block w-100"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            {landImages.map((image, index) => (
              <Button
                key={index}
                variant={index === currentImageIndex ? "success" : "outline-secondary"}
                className="p-0"
                onClick={() => setCurrentImageIndex(index)}
                style={{ width: "100px", height: "80px" }}
              >
                <Image
                  src={landImages[index]}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {/* Investment Calculator */}
      <section id="calculator" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Investment Calculator</h2>
            <p className="section-subtitle">See your potential returns with this premium land investment</p>
          </div>
          <Row style={{display: "block", justifyContent: "center"}}>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Chi tiết đầu tư</Card.Title>
                  <div className="mb-3">
                    <strong>Giá thuê đất:</strong> 250 triệu đồng/ năm ( còn thương lượng )
                  </div>
                  
                  <div>
                    <strong>Thời hạn thuê:</strong> 5 năm
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Title style={{textAlign: "center"}}>Lợi nhuận hàng năm dự kiến</Card.Title>
                <Card.Body>
                  <div className="mb-3">
                    <strong>Sầu riêng (Ri6):</strong><br />
                    Doanh thu: 900,000,000 ₫/ha/năm<br />
                    Chi phí: 300,000,000 ₫/ha/năm<br />
                    Lợi nhuận ròng: <span className="text-success">600,000,000 ₫/ha/năm</span><br />
                    ROI: <span className="text-success">200%</span>
                  </div>
                  <div className="mb-3">
                    <strong>Củ mì (sắn):</strong><br />
                    Doanh thu: 50,000,000 ₫/ha/năm<br />
                    Chi phí: 20,000,000 ₫/ha/năm<br />
                    Lợi nhuận ròng: <span className="text-success">30,000,000 ₫/ha/năm</span><br />
                    ROI: <span className="text-success">150%</span>
                  </div>
                  <small className="text-muted">
                    *Dữ liệu mang tính ước lượng dựa trên giá thị trường tháng 6/2025 và điều kiện canh tác trung bình. Kết quả thực tế có thể thay đổi.
                  </small>
                </Card.Body>

              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    
      

      {/* Why Choose Us */}
      <section id="why-choose" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Tại sao chọn Ngọc Land</h2>
        
          </div>
   <Row>
  {[
 
    {
      icon: "📋",
      title: "Cam kết pháp lý",
      desc: "100% giấy tờ hợp pháp, đầy đủ sổ sách và các giấy phép cần thiết.",
    },
    {
      icon: "💰",
      title: "Thanh toán linh hoạt",
      desc: "Nhiều phương thức thanh toán",
    },
    {
      icon: "🎯",
      title: "Vị trí đắc địa",
      desc: "Bất động sản được chọn lọc chiến lược tại khu vực tăng trưởng mạnh với tiềm năng sinh lời cao.",
    },
   
    
  ].map((feature, index) => (
    <Col md={4} className="mb-4" key={index}>
      <Card className="h-100 shadow-sm text-center">
        <Card.Body>
          <div className="feature-icon mb-3">{feature.icon}</div>
          <Card.Title>{feature.title}</Card.Title>
          <Card.Text>{feature.desc}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

        </Container>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Liên lạc</h2>
           </div>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Họ tên</Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Số điện </Form.Label>
                      <Form.Control
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Mô tả</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="needs"
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                        rows={4}
                        placeholder="Nhập nội dung yêu cầu của bạn"
                        required
                      />
                    </Form.Group>
                    <Button variant="success" type="submit" className="w-100">
                      Submit Inquiry
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Thông tin liên hệ</Card.Title>
                  <div className="d-flex align-items-start mb-3">
                    <Phone size={20} className="text-success me-3" />
                    <div>
                      <strong>Số điện thoại</strong>
                      <p className="text-muted mb-0">0902715456</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <Mail size={20} className="text-success me-3" />
                    <div>
                      <strong>Email</strong>
                      <p className="text-muted mb-0">vemaybay6b5@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <MapPin size={20} className="text-success me-3" />
                    <div>
                      <strong>Office địa chỉ</strong>
                      <p className="text-muted mb-0">
                        77HG+95 Dương Minh Châu District, Tây Ninh, Vietnam
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h3 className="footer-logo">Ngọc Land</h3>
              
            </Col>
            <Col md={4} className="mb-3">
              <h4>Liên hệ với chúng tôi</h4>
              <div className="d-flex align-items-center mb-2">
                <MapPin size={16} className="me-2" />
                <span>6b5 Hà Huy Giáp, Phường Thạnh Lộc, Quận 12, Thành phố Hồ Chí Minh</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} className="me-2" />
                <span>0902715456</span>
              </div>
              <div className="d-flex align-items-center">
                <Mail size={16} className="me-2" />
                <span>vemaybay6b5@gmail.com</span>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <h4>Follow Us</h4>
              <div className="d-flex gap-2">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
              </div>
            </Col>
          </Row>
          <hr className="border-light" />
          <div className="text-center">
            <p>© 2024 GreenLand Real Estate. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
