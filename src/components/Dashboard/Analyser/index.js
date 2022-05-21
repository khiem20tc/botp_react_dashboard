import {
  AccountBalance,
  ArrowDownward,
  ArrowUpward,
  ConfirmationNumber,
  Person,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { userDataToday, userDataWeek } from "common/mock/chart";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Analyser() {
  const analyzerBadge = (number, isUp) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: (theme) =>
          isUp ? theme.palette.success.light : theme.palette.error.light,
        color: "#ffffff",
        padding: 0.1,
        lineHeight: 1,
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        borderRadius: 1.5,
        mb: 1,
        ml: 1,
      }}
    >
      <Typography
        variant="caption"
        sx={{ ml: 0.6, mr: 0.2, pt: 0.2, paddingBottom: 0 }}
      >
        {new Intl.NumberFormat().format(number)}
      </Typography>
      {isUp ? (
        <ArrowUpward sx={{ mb: 0.2, fontSize: 16, mr: 0.2 }} />
      ) : (
        <ArrowDownward sx={{ mb: 0.2, fontSize: 16, mr: 0.2 }} />
      )}
    </Box>
  );

  const analyzerCard = (number, title, badge, icon) => (
    <Box sx={{ flex: 1 }}>
      <Card
        sx={{
          marginRight: 4,
          boxShadow: "0px 2px 30px 0px rgb(0, 0, 0, 0.1)",
          borderRadius: "12px",
          cursor: "pointer",
          // bgcolor: (theme) => theme.palette.primary.light,
          "&:hover": {
            boxShadow: "0px 2px 30px 0px rgb(0, 0, 0, 0.3)",
            color: (theme) => theme.palette.primary.main,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            pt: 2,
            pb: 2,
            pl: 2,
            pr: 2,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: "bold", opacity: 0.8 }}
                >
                  {new Intl.NumberFormat().format(number)}
                </Typography>
                <Box sx={{ display: "flex", width: "100%", mt: 1 }}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {title}
                  </Typography>
                  {badge}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.8,
                }}
              >
                {icon}
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );

  return (
    <Box sx={{ pt: 4, pl: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Box sx={{ display: "flex" }}>
        {analyzerCard(
          1234,
          "Total users",
          analyzerBadge("456", true),
          <Person
            sx={{
              fontSize: 48,
            }}
          />
        )}
        {analyzerCard(
          3456789,
          "Total transactions",
          analyzerBadge("67890", false),
          <ConfirmationNumber
            sx={{
              fontSize: 48,
            }}
          />
        )}
        {analyzerCard(
          7890,
          "Total agents",
          analyzerBadge("123", true),
          <AccountBalance
            sx={{
              fontSize: 48,
            }}
          />
        )}
      </Box>
      <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
        Chart
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            flex: 1,
            mr: 4,
            p: 2,
            boxShadow: "0px 2px 30px 0px rgb(0, 0, 0, 0.1)",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
            Daily users
          </Typography>
          <ResponsiveContainer height={380}>
            <LineChart data={userDataToday}>
              <XAxis dataKey="name" />
              <YAxis dataKey="tu" />
              <Line
                name="Total users"
                type="monotone"
                dataKey="tu"
                stroke="#378ab1"
              />
              <Line
                name="New users"
                type="monotone"
                dataKey="nu"
                stroke="#3eb857"
              />
              <Line
                name="Opt-outed users"
                type="monotone"
                dataKey="ou"
                stroke="#b6291c"
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            mr: 4,
          }}
        >
          <Box
            sx={{
              flex: 1,
              mb: 4,
              p: 2,
              boxShadow: "0px 2px 30px 0px rgb(0, 0, 0, 0.1)",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
              Weekly users
            </Typography>
            <ResponsiveContainer height={140}>
              <LineChart data={userDataWeek}>
                <XAxis dataKey="name" />
                <YAxis dataKey="tu" />
                <Line
                  name="Total users"
                  type="monotone"
                  dataKey="tu"
                  stroke="#378ab1"
                />
                <Line
                  name="New users"
                  type="monotone"
                  dataKey="nu"
                  stroke="#3eb857"
                />
                <Line
                  name="Opt-outed users"
                  type="monotone"
                  dataKey="ou"
                  stroke="#b6291c"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box
            sx={{
              flex: 1,
              p: 2,
              boxShadow: "0px 2px 30px 0px rgb(0, 0, 0, 0.1)",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
              Monthly users
            </Typography>
            <ResponsiveContainer height={140}>
              <LineChart data={userDataToday}>
                <XAxis dataKey="name" />
                <YAxis dataKey="tu" />
                <Line
                  name="Total users"
                  type="monotone"
                  dataKey="tu"
                  stroke="#378ab1"
                />
                <Line
                  name="New users"
                  type="monotone"
                  dataKey="nu"
                  stroke="#3eb857"
                />
                <Line
                  name="Opt-outed users"
                  type="monotone"
                  dataKey="ou"
                  stroke="#b6291c"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Analyser;
