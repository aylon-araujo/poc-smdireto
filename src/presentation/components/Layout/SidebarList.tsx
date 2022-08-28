import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MessageIcon from "@mui/icons-material/Message";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import PaymentsIcon from "@mui/icons-material/Payments";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

export const SidebarList = [
  {
    id: Math.floor(Math.random() * 100),
    name: "Dashboard",
    description: "dashboard",
    icon: DashboardIcon,
    onClick: () => (window.location.href = "/dashboard"),
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Pedidos",
    description: "icon",
    icon: LocalMallIcon,
    onClick: () => (window.location.href = "/pedidos"),
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Sistema",
    description: "system",
    icon: TerminalOutlinedIcon,
    children: [
      {
        id: Math.floor(Math.random() * 100),
        name: "Fila",
        description: "",
      },
      {
        id: Math.floor(Math.random() * 100),
        name: "Logs",
        description: "logs",
      },
      {
        id: Math.floor(Math.random() * 100),
        name: "Variáveis",
        description: "variables",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Relatório",
    description: "report",
    icon: AssessmentIcon,
    children: [
      {
        id: Math.floor(Math.random() * 100),
        name: "Pedidos",
        description: "",
      },
      {
        id: Math.floor(Math.random() * 100),
        name: "Log de erros",
        description: "",
      },
      {
        id: Math.floor(Math.random() * 100),
        name: "Escola",
        description: "",
      },
      {
        id: Math.floor(Math.random() * 100),
        name: "Usuários",
        description: "",
      },
      {
        id: Math.floor(Math.random() * 100),
        name: "Vouchers",
        description: "",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Atendimento",
    description: "icon",
    icon: MessageIcon,
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Aparência",
    description: "icon",
    icon: SettingsApplicationsIcon,
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Contrato",
    description: "icon",
    icon: HistoryEduIcon,
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Desconto Professor",
    description: "icon",
    icon: PriceChangeIcon,
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Meios de Pagamento",
    description: "icon",
    icon: PaymentsIcon,
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Notificações",
    description: "icon",
    icon: NotificationsNoneIcon,
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "Sair",
    description: "icon",
    icon: MeetingRoomIcon,
    onClick: () => (window.location.href = "/"),
  },
];
