import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
  Paper,
  Rating,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  RocketLaunch as RocketIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  SupportAgent as SupportIcon,
  ChevronRight as ChevronRightIcon,
  Star as StarIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1a1a2e",
      light: "#2d2d44",
      dark: "#0f0f1a",
    },
    secondary: {
      main: "#e94560",
      light: "#ff6b81",
      dark: "#c72a48",
    },
    background: {
      default: "#f8f7f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e1e2f",
      secondary: "#5a5a6e",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          padding: "10px 24px",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #16213e 0%, #c73652 100%)",
          },
        },
        outlinedSecondary: {
          borderColor: "#e94560",
          color: "#e94560",
          "&:hover": {
            borderColor: "#c72a48",
            backgroundColor: "rgba(233,69,96,0.04)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 30px -12px rgba(0,0,0,0.1)",
          },
        },
      },
    },
  },
});

// Sample data
const features = [
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Lightning Fast",
    description:
      "Optimized performance with modern architecture and CDN delivery.",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "Bank-level Security",
    description:
      "Your data is encrypted and protected with enterprise-grade security.",
  },
  {
    icon: <SupportIcon fontSize="large" />,
    title: "24/7 Support",
    description: "Our team is always here to help, day or night.",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CTO @ TechFlow",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: 5,
    text: "This platform revolutionized our workflow. The team's attention to detail is unmatched.",
  },
  {
    name: "Sofia Chen",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "Incredible user experience and seamless integration. Highly recommended!",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const themeMui = useTheme();
  const isMobile = useMediaQuery(themeMui.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <AppBar
        position="sticky"
        color="default"
        elevation={1}
        sx={{ bgcolor: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #1a1a2e, #e94560)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Boma
            </Typography>
            {isMobile ? (
              <IconButton edge="end" color="primary">
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Button color="inherit">Product</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
                <Button variant="outlined" color="secondary" onClick={() => navigate("/register")}>
                  Log in
                </Button>
                <Button variant="contained" color="primary">
                  Start free
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f8f7f4 0%, #e0e0e0 100%)",
          pt: { xs: 6, md: 10 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 2,
                }}
              >
                Build digital products{" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  faster
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                The all‑in‑one platform to create, deploy, and scale your web
                applications with confidence.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ChevronRightIcon />}
                >
                  Get started
                </Button>
                <Button variant="outlined" color="secondary" size="large">
                  Learn more
                </Button>
              </Box>
              <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    10k+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active users
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    99.9%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Uptime SLA
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    24/7
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Support
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 6,
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <img
                  src="https://placehold.co/600x400/1a1a2e/ffffff?text=Dashboard+Preview"
                  alt="Dashboard preview"
                  style={{ width: "100%", borderRadius: 24, display: "block" }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="overline"
            color="secondary.main"
            fontWeight={600}
          >
            Why choose us
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}
          >
            Designed for modern teams
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Everything you need to build exceptional digital experiences.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {features.map((feat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
                <Box sx={{ color: "secondary.main", mb: 2 }}>{feat.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feat.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feat.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ bgcolor: "#f1f1ef", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="overline"
              color="secondary.main"
              fontWeight={600}
            >
              Testimonials
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}
            >
              Loved by creators worldwide
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {testimonials.map((t, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card sx={{ height: "100%", p: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar src={t.avatar} sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={t.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body2" color="text.secondary">
                    "{t.text}"
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}
          >
            Ready to accelerate your growth?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
            Join thousands of teams building better products with Brandify.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "#1a1a2e",
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Start your free trial
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#0f0f1a", color: "#aaa", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                Boma
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                The modern platform for digital creators.
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton size="small" sx={{ color: "#aaa" }}>
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: "#aaa" }}>
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: "#aaa" }}>
                  <LinkedIn fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: "#aaa" }}>
                  <Instagram fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                Product
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Features
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Pricing
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Integrations
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                Company
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                About
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Blog
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Careers
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2" sx={{ color: "white", mb: 2 }}>
                Contact
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <EmailIcon fontSize="small" />
                <Typography variant="body2">hello@brandify.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationIcon fontSize="small" />
                <Typography variant="body2">San Francisco, CA</Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: "#2a2a3a" }} />
          <Typography variant="caption" textAlign="center" display="block">
            © {new Date().getFullYear()} Brandify. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
