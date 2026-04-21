import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  Divider,
  Chip,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Avatar,
  LinearProgress,
  Paper,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Lock,
  Phone,
  Home,
  Work,
  Cake,
  CheckCircle,
  Upload,
  LinkedIn,
  GitHub,
  Language,
} from "@mui/icons-material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1a1a2e", dark: "#16213e" },
    secondary: { main: "#e94560" },
    background: { default: "#f8f7f4", paper: "#ffffff" },
  },
  typography: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    h4: { fontWeight: 700, letterSpacing: "-0.5px" },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: "0.3px" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiTextField: {
      defaultProps: { variant: "outlined", size: "small", fullWidth: true },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
            "&:hover fieldset": { borderColor: "#1a1a2e" },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, padding: "10px 24px" },
        contained: {
          background: "linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #16213e 0%, #c73652 100%)",
          },
          boxShadow: "0 4px 20px rgba(233,69,96,0.3)",
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 20 } } },
  },
});

const STEPS = ["Account", "Personal", "Professional", "Social & Finish"];
const COUNTRIES = [
  "Egypt",
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Japan",
  "Canada",
  "Australia",
  "Brazil",
  "India",
];
const SKILLS = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "TypeScript",
  "Java",
  "Go",
  "Rust",
  "SQL",
  "Machine Learning",
];
const EXPERIENCE_LEVELS = [
  "Student / Intern",
  "Junior (0–2 yrs)",
  "Mid-level (3–5 yrs)",
  "Senior (6–10 yrs)",
  "Lead / Principal (10+ yrs)",
];

function PasswordStrength({ password }) {
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];
  const score = checks.filter(Boolean).length;
  const colors = ["#e94560", "#ff9800", "#2196f3", "#4caf50"];
  const labels = ["Weak", "Fair", "Good", "Strong"];
  if (!password) return null;
  return (
    <Box>
      <LinearProgress
        variant="determinate"
        value={(score / 4) * 100}
        sx={{
          height: 4,
          borderRadius: 4,
          bgcolor: "#eee",
          "& .MuiLinearProgress-bar": {
            bgcolor: colors[score - 1] || "#e94560",
          },
        }}
      />
      <Typography
        variant="caption"
        sx={{ color: colors[score - 1] || "#e94560", fontWeight: 600 }}
      >
        {labels[score - 1] || "Very Weak"}
      </Typography>
    </Box>
  );
}

function StepAccount({ data, onChange }) {
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const fileInputRef = useRef();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange("avatarUrl", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  return (
    <Box display="flex" flexDirection="column" gap={10}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1.5}>
        <Avatar
          src={data.avatarUrl}
          sx={{
            width: 68,
            height: 68,
            bgcolor: "#1a1a2e",
            fontSize: 26,
            marginBottom: 2,
          }}
        >
          {data.firstName?.[0]?.toUpperCase() || <Person />}
        </Avatar>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileUpload}
        />
        <Button
          variant="outlined"
          size="small"
          startIcon={<Upload sx={{ fontSize: 15 }} />}
          onClick={triggerFileInput}
          sx={{
            borderColor: "#ddd",
            color: "#777",
            borderRadius: 8,
            fontSize: 12,
            py: 0.4,
            px: 1.5,
          }}
        >
          Upload Photo
        </Button>
      </Box>
      <Grid container spacing={1.5} sx={{ marginBottom: 2, marginTop: 2 }}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            value={data.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ fontSize: 16, color: "#bbb" }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            value={data.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
          />
        </Grid>
      </Grid>
      <TextField
        label="Username"
        sx={{ marginBottom: 2 }}
        value={data.username}
        onChange={(e) => onChange("username", e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography
                sx={{
                  color: "#bbb",
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                @
              </Typography>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Email Address"
        type="email"
        sx={{ marginBottom: 2 }}
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        type={showPw ? "text" : "password"}
        value={data.password}
        sx={{ marginBottom: 2 }}
        onChange={(e) => onChange("password", e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPw((v) => !v)}
                size="small"
                edge="end"
              >
                {showPw ? (
                  <VisibilityOff sx={{ fontSize: 18 }} />
                ) : (
                  <Visibility sx={{ fontSize: 18 }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <PasswordStrength password={data.password} />
      <TextField
        label="Confirm Password"
        type={showConfirm ? "text" : "password"}
        value={data.confirmPassword}
        onChange={(e) => onChange("confirmPassword", e.target.value)}
        sx={{ marginBottom: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowConfirm((v) => !v)}
                size="small"
                edge="end"
              >
                {showConfirm ? (
                  <VisibilityOff sx={{ fontSize: 18 }} />
                ) : (
                  <Visibility sx={{ fontSize: 18 }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

function StepPersonal({ data, onChange }) {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Date of Birth"
        // stop label from overlapping with date value
        type="date"
        sx={{ marginBottom: 2, marginTop: 2 }}
        value={data.dob}
        onChange={(e) => onChange("dob", e.target.value)}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Cake sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ marginBottom: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: "#777", mb: 0.75, fontWeight: 500 }}
        >
          Gender
        </Typography>
        <RadioGroup
          row
          value={data.gender}
          onChange={(e) => onChange("gender", e.target.value)}
        >
          {["Male", "Female", "Non-binary", "Prefer not to say"].map((g) => (
            <FormControlLabel
              key={g}
              value={g}
              sx={{ mr: 1.5 }}
              control={
                <Radio
                  size="small"
                  sx={{
                    color: "#ccc",
                    "&.Mui-checked": { color: "#e94560" },
                    p: 0.5,
                  }}
                />
              }
              label={<Typography variant="body2">{g}</Typography>}
            />
          ))}
        </RadioGroup>
      </Box>

      <TextField
        label="Phone Number"
        sx={{ marginBottom: 2 }}
        value={data.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={1.5} sx={{ marginBottom: 2 }}>
        <Grid item xs={6}>
          <FormControl maxWidth size="small">
            <InputLabel>Country</InputLabel>
            <Select
              label="Country"
              value={data.country}
              onChange={(e) => onChange("country", e.target.value)}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              {COUNTRIES.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="City"
            value={data.city}
            onChange={(e) => onChange("city", e.target.value)}
          />
        </Grid>
      </Grid>

      <TextField
        label="Address"
        sx={{ marginBottom: 2 }}
        value={data.address}
        onChange={(e) => onChange("address", e.target.value)}
        placeholder="Street address, apartment, etc."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Home sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={1.5} sx={{ marginBottom: 2 }}>
        <Grid item xs={5}>
          <TextField
            label="Postal Code"
            value={data.postalCode}
            onChange={(e) => onChange("postalCode", e.target.value)}
          />
        </Grid>
        <Grid item xs={7}>
          <FormControl fullWidth size="small">
            <InputLabel>Language</InputLabel>
            <Select
              label="Language"
              value={data.language}
              onChange={(e) => onChange("language", e.target.value)}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              {[
                "English",
                "Arabic",
                "French",
                "German",
                "Spanish",
                "Japanese",
              ].map((l) => (
                <MenuItem key={l} value={l}>
                  {l}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TextField
        sx={{ marginBottom: 2 }}
        label="Short Bio"
        multiline
        rows={3}
        value={data.bio}
        onChange={(e) => onChange("bio", e.target.value)}
        placeholder="Tell us a bit about yourself..."
        helperText={`${(data.bio || "").length}/200 characters`}
        inputProps={{ maxLength: 200 }}
      />
    </Box>
  );
}

function StepProfessional({ data, onChange }) {
  const toggleSkill = (skill) => {
    const cur = data.skills || [];
    onChange(
      "skills",
      cur.includes(skill) ? cur.filter((s) => s !== skill) : [...cur, skill],
    );
  };
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Grid container spacing={1.5} sx={{ marginBottom: 2, marginTop: 2 }}>
        <Grid item xs={6}>
          <TextField
            label="Job Title"
            value={data.jobTitle}
            onChange={(e) => onChange("jobTitle", e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Work sx={{ fontSize: 16, color: "#bbb" }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Company"
            value={data.company}
            onChange={(e) => onChange("company", e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1.5} sx={{ marginBottom: 2 }}>
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <InputLabel>Experience Level</InputLabel>
            <Select
              label="Experience Level"
              value={data.experienceLevel}
              onChange={(e) => onChange("experienceLevel", e.target.value)}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              {EXPERIENCE_LEVELS.map((e) => (
                <MenuItem key={e} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth size="small">
            <InputLabel>Industry</InputLabel>
            <Select
              label="Industry"
              value={data.industry}
              onChange={(e) => onChange("industry", e.target.value)}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              {[
                "Technology",
                "Finance",
                "Healthcare",
                "Education",
                "Design",
                "Marketing",
                "Engineering",
                "Research",
                "Other",
              ].map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ marginBottom: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: "#777", mb: 0.75, fontWeight: 500 }}
        >
          Skills
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={0.75}>
          {SKILLS.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onClick={() => toggleSkill(skill)}
              size="small"
              variant={
                (data.skills || []).includes(skill) ? "filled" : "outlined"
              }
              sx={{
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 12,
                ...((data.skills || []).includes(skill)
                  ? {
                      bgcolor: "#1a1a2e",
                      color: "#fff",
                      "&:hover": { bgcolor: "#16213e" },
                    }
                  : {
                      borderColor: "#ddd",
                      color: "#666",
                      "&:hover": { borderColor: "#1a1a2e", color: "#1a1a2e" },
                    }),
              }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: "#777", mb: 0.75, fontWeight: 500 }}
        >
          Work Type
        </Typography>
        <RadioGroup
          row
          value={data.workType}
          onChange={(e) => onChange("workType", e.target.value)}
        >
          {["Remote", "Hybrid", "On-site"].map((w) => (
            <FormControlLabel
              key={w}
              value={w}
              sx={{ mr: 2 }}
              control={
                <Radio
                  size="small"
                  sx={{
                    color: "#ccc",
                    "&.Mui-checked": { color: "#e94560" },
                    p: 0.5,
                  }}
                />
              }
              label={<Typography variant="body2">{w}</Typography>}
            />
          ))}
        </RadioGroup>
      </Box>

      <TextField
        sx={{ marginBottom: 2 }}
        label="Portfolio / Website"
        value={data.portfolio}
        onChange={(e) => onChange("portfolio", e.target.value)}
        placeholder="https://yoursite.com"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Language sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

function StepSocial({ data, onChange }) {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        sx={{ marginBottom: 2, marginTop: 2 }}
        label="LinkedIn Profile"
        value={data.linkedin}
        onChange={(e) => onChange("linkedin", e.target.value)}
        placeholder="linkedin.com/in/yourname"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkedIn sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="GitHub Profile"
        sx={{ marginBottom: 2 }}
        value={data.github}
        onChange={(e) => onChange("github", e.target.value)}
        placeholder="github.com/yourname"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GitHub sx={{ fontSize: 16, color: "#bbb" }} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Twitter / X Handle"
        sx={{ marginBottom: 2 }}
        value={data.twitter}
        onChange={(e) => onChange("twitter", e.target.value)}
        placeholder="@handle"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography sx={{ color: "#bbb", fontSize: 13, fontWeight: 700 }}>
                𝕏
              </Typography>
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      <Box sx={{ marginTop: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: "#555", mb: 1, fontWeight: 600 }}
        >
          Notifications
        </Typography>
        <FormGroup>
          {[
            { key: "emailNotif", label: "Email notifications" },
            { key: "smsNotif", label: "SMS notifications" },
            { key: "marketingEmails", label: "Product updates & marketing" },
            { key: "weeklyDigest", label: "Weekly digest" },
          ].map(({ key, label }) => (
            <FormControlLabel
              key={key}
              sx={{ m: 0, py: 0.25 }}
              control={
                <Checkbox
                  size="small"
                  checked={!!data[key]}
                  onChange={(e) => onChange(key, e.target.checked)}
                  sx={{
                    color: "#ccc",
                    "&.Mui-checked": { color: "#e94560" },
                    p: 0.75,
                  }}
                />
              }
              label={<Typography variant="body2">{label}</Typography>}
            />
          ))}
        </FormGroup>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      <Box sx={{ marginTop: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: "#555", mb: 0.75, fontWeight: 600 }}
        >
          Profile Visibility
        </Typography>
        <RadioGroup
          value={data.visibility}
          onChange={(e) => onChange("visibility", e.target.value)}
        >
          {[
            { value: "public", label: "Public — anyone can view" },
            { value: "members", label: "Members only" },
            { value: "private", label: "Private — only you" },
          ].map((opt) => (
            <FormControlLabel
              key={opt.value}
              value={opt.value}
              sx={{ m: 0, py: 0.25 }}
              control={
                <Radio
                  size="small"
                  sx={{
                    color: "#ccc",
                    "&.Mui-checked": { color: "#e94560" },
                    p: 0.75,
                  }}
                />
              }
              label={<Typography variant="body2">{opt.label}</Typography>}
            />
          ))}
        </RadioGroup>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      <Box display="flex" flexDirection="column">
        <FormControlLabel
          sx={{ m: 0, alignItems: "flex-start" }}
          control={
            <Checkbox
              size="small"
              checked={!!data.agreeTerms}
              onChange={(e) => onChange("agreeTerms", e.target.checked)}
              sx={{
                color: "#ccc",
                "&.Mui-checked": { color: "#e94560" },
                p: 0.75,
                pt: 0.3,
              }}
            />
          }
          label={
            <Typography variant="body2" sx={{ mt: 0.3 }}>
              I agree to the{" "}
              <Box
                component="span"
                sx={{
                  color: "#e94560",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Terms of Service
              </Box>{" "}
              and{" "}
              <Box
                component="span"
                sx={{
                  color: "#e94560",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Privacy Policy
              </Box>
            </Typography>
          }
        />
        <br />
        <FormControlLabel
          sx={{ m: 0 }}
          control={
            <Checkbox
              size="small"
              checked={!!data.ageConfirm}
              onChange={(e) => onChange("ageConfirm", e.target.checked)}
              sx={{
                color: "#ccc",
                "&.Mui-checked": { color: "#e94560" },
                p: 0.75,
              }}
            />
          }
          label={
            <Typography variant="body2">
              I confirm I am 18 years of age or older
            </Typography>
          }
        />
      </Box>
    </Box>
  );
}

const INITIAL = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  phone: "",
  country: "",
  city: "",
  address: "",
  postalCode: "",
  language: "",
  bio: "",
  jobTitle: "",
  company: "",
  experienceLevel: "",
  industry: "",
  skills: [],
  workType: "",
  portfolio: "",
  linkedin: "",
  github: "",
  twitter: "",
  emailNotif: true,
  smsNotif: false,
  marketingEmails: false,
  weeklyDigest: true,
  visibility: "public",
  agreeTerms: false,
  ageConfirm: false,
};

export default function RegisterForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [data, setData] = useState(INITIAL);
  const [done, setDone] = useState(false);

  const onChange = (field, value) =>
    setData((prev) => ({ ...prev, [field]: value }));
  const handleNext = () =>
    step < STEPS.length - 1 ? setStep((s) => s + 1) : setDone(true);
  const handleBack = () => setStep((s) => s - 1);

  const stepComponents = [
    <StepAccount data={data} onChange={onChange} />,
    <StepPersonal data={data} onChange={onChange} />,
    <StepProfessional data={data} onChange={onChange} />,
    <StepSocial data={data} onChange={onChange} />,
  ];

  if (done) {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #f8f7f4 0%, #ece9e6 100%)",
            p: 2,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 5,
              maxWidth: 420,
              width: "100%",
              textAlign: "center",
              border: "1px solid #eee",
            }}
          >
            <Box
              sx={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                bgcolor: "#e8f5e9",
                display: "flex",
                justifyContent: "center",
                mx: "auto",
                mb: 2.5,
                alignItems: "center",
              }}
            >
              <CheckCircle sx={{ fontSize: 36, color: "#4caf50" }} />
            </Box>
            <Typography variant="h5" fontWeight={700} mb={1}>
              Welcome, {data.firstName || "there"}!
            </Typography>
          </Paper>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #f8f7f4 0%, #ece9e6 100%)",
          p: { xs: 1.5, sm: 3 },
          justifyContent: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box maxWidth={540} width="100%" py={3}>
          <Box textAlign="center" mb={2.5}>
            <Box
              display="inline-flex"
              alignItems="center"
              mb={1.5}
              sx={{
                background: "linear-gradient(135deg, #1a1a2e, #e94560)",
                borderRadius: 3,
                px: 1.5,
                py: 0.4,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontSize: 11,
                }}
              >
                Create Account
              </Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join the community
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              Step {step + 1} of {STEPS.length} — {STEPS[step]}
            </Typography>
          </Box>

          <Stepper activeStep={step} alternativeLabel sx={{ mb: 2.5 }}>
            {STEPS.map((label) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label": {
                      fontSize: 11,
                      fontWeight: 600,
                    },
                    "& .MuiStepIcon-root.Mui-active": { color: "#e94560" },
                    "& .MuiStepIcon-root.Mui-completed": { color: "#1a1a2e" },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Paper
            elevation={0}
            sx={{ p: { xs: 2.5, sm: 3.5 }, border: "1px solid #eee" }}
          >
            <Typography variant="h6" mb={2}>
              {STEPS[step]}
            </Typography>
            {stepComponents[step]}

            <Box display="flex" gap={1.5} mt={3}>
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={step === 0}
                sx={{
                  borderColor: "#ddd",
                  color: "#666",
                  marginRight: 2,
                  flex: 1,
                  "&:hover": { borderColor: "#1a1a2e", color: "#1a1a2e" },
                  "&.Mui-disabled": { borderColor: "#eee", color: "#ccc" },
                }}
              >
                Back
              </Button>
              <Button variant="contained" onClick={handleNext} sx={{ flex: 2 }}>
                {step === STEPS.length - 1 ? "Create Account" : "Continue"}
              </Button>
            </Box>

            {step === 0 && (
              <Typography
                variant="body2"
                textAlign="center"
                color="text.secondary"
                mt={2}
              >
                Already have an account?{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#e94560",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Sign in
                </Box>
              </Typography>
            )}
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
