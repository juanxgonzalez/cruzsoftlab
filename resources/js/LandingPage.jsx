import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Server, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Mail, 
  MessageSquare, 
  Zap, 
  ChevronRight, 
  Menu, 
  X, 
  CreditCard, 
  UserCheck,
  LogIn,
  Lock,
  KeyRound,
  Shield,
  Clock,
  Search,
  Eye,
  LogOut,
  SlidersHorizontal,
  FileText,
  DollarSign,
  Receipt,
  Download,
  PlusCircle,
  TrendingUp,
  AlertCircle,
  ShieldCheck,
  ShieldAlert,
  Key,
  RefreshCw,
  Copy,
  Check,
  Calendar,
  Laptop,
  Trash2,
  Edit3,
  Activity,
  Power
} from 'lucide-react';

function GithubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
    </svg>
  );
}

/* Logos Oficiales Vectoriales */
function LaravelLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21.5 5.5l-9-4-9 4v13l9 4 9-4v-13z" stroke="#FF2D20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 1.5l9 4-9 4-9-4 9-4z" fill="#FF2D20" fillOpacity="0.2"/>
      <path d="M12.5 9.5v13M3.5 5.5l9 4 9-4" stroke="#FF2D20" strokeWidth="1.6"/>
      <path d="M17 11.5l-4.5 2-4.5-2v-3l4.5-2 4.5 2v3z" fill="#FF2D20"/>
    </svg>
  );
}

function ReactLogo({ className }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

function TailwindLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fill="#38BDF8" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.02,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.982,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.532,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.982,12,6.001,12z"/>
    </svg>
  );
}

function PhpLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="11" ry="6.8" fill="#777BB4" fillOpacity="0.15" stroke="#777BB4" strokeWidth="1.5"/>
      <path d="M5.5 14h1.8l.6-2.2h1.2c1.2 0 2-.6 2.3-1.8.3-1-.2-1.8-1.3-1.8H6.5L5.5 14zm2.1-3.2l.4-1.6h.8c.4 0 .7.2.6.6-.1.4-.4.8-.8.8l-1 .2z" fill="#777BB4"/>
      <path d="M10.8 14h1.5l.8-3.1h1.4c.8 0 1.2.4 1 1.1l-.5 2h1.5l.6-2.3c.2-.9-.3-1.8-1.4-1.8h-1.3l.4-1.6h-1.5l-1 4.7-.6 1z" fill="#777BB4"/>
      <path d="M17.2 14h1.8l.6-2.2h1.2c1.2 0 2-.6 2.3-1.8.3-1-.2-1.8-1.3-1.8h-3.1l-1 5.8zm2.1-3.2l.4-1.6h.8c.4 0 .7.2.6.6-.1.4-.4.8-.8.8l-1 .2z" fill="#777BB4"/>
    </svg>
  );
}

function PostgresLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791" fillOpacity="0.15"/>
      <path d="M16.8 9.2c-.4-.9-1.2-1.7-2.2-2.1-.8-.3-1.8-.4-2.6-.1-.9.3-1.6 1-2 1.8-.8 1.4-.8 3.2-.2 4.7.4 1.1 1.2 2 2.2 2.5.9.4 2 .4 2.9.1 1.1-.4 1.9-1.3 2.3-2.4.5-1.5.4-3.1-.4-4.5zm-4.3 5.4c-.6 0-1.1-.3-1.4-.8-.3-.6-.4-1.4-.2-2.1.2-.7.7-1.3 1.4-1.5.5-.1 1.1 0 1.5.3.4.4.7.9.8 1.5.1.7 0 1.4-.4 1.9-.4.5-1 .7-1.7.7z" fill="#336791"/>
      <path d="M7 16.5c1.2.9 2.7 1.5 4.2 1.5 2 0 3.8-.9 5-2.4" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function DockerRedisLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M13.5 8h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm6-3h2v2h-2zm-3 0h2v2h-2zm9 7c-.3-.2-.8-.3-1.3-.2-.2-.6-.6-1.1-1.2-1.4l-.5-.3-.3.5c-.3.5-.4 1.1-.3 1.7-.6.3-1.4.5-2.2.5H3c-.6 0-1 .4-1 1 0 3.9 3.1 7.1 7 7.1 5.3 0 9.7-3.8 10.5-8.9.7-.3 1.3-.8 1.5-1.5l-1-.5z" fill="#2496ED"/>
      <path d="M17 16l3-1.5 3 1.5-3 1.5-3-1.5zm0 3l3-1.5 3 1.5-3 1.5-3-1.5z" fill="#DC382D"/>
    </svg>
  );
}

function LaragonLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="10" fill="#0C4A6E" fillOpacity="0.3"/>
      {/* Dragon crest shape with teal gradient */}
      <path d="M14 36c0-6 4-10 10-10 4 0 7 2 9 5-1-6-4-11-9-13 4 1 7 4 9 8 1-3 3-6 6-7-1 5-4 9-7 11 3 0 6 2 7 5-3-1-6-1-8 0 3 2 5 5 5 9-3-2-6-3-10-3-4 0-8 2-10 5l-2-7z" fill="#06B6D4"/>
      <circle cx="21" cy="18" r="2.5" fill="#38BDF8"/>
      <path d="M12 36h24" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Sistema de Inscripción & Pagos',
    budget: '$1,000 - $3,000 USD',
    message: ''
  });

  /* Estados del Backend / Portal Administrativo */
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [credentials, setCredentials] = useState({ email: 'juan.cruz@cruzsoftlabs.com', password: '' });
  const [proposalsList, setProposalsList] = useState([]);
  const [proposalsStats, setProposalsStats] = useState({ total: 0, pendientes: 0, en_revision: 0, contactados: 0, aceptados: 0 });
  const [proposalFilter, setProposalFilter] = useState('todos');
  const [proposalSearch, setProposalSearch] = useState('');
  const [loadingProposals, setLoadingProposals] = useState(false);

  /* Estados del Módulo de Cobro, Pagos, Cotizaciones y Facturación */
  const [activePortalTab, setActivePortalTab] = useState('proposals'); // 'proposals', 'quotations', 'payments', 'invoices', 'new_quotation'
  const [billingMetrics, setBillingMetrics] = useState({
    total_cotizado: 120700,
    total_cobrado: 34104,
    total_facturado: 34104,
    total_pendiente: 86596,
    count_quotations: 2,
    count_payments: 1,
    count_invoices: 1
  });
  const [quotationsList, setQuotationsList] = useState([]);
  const [paymentsList, setPaymentsList] = useState([]);
  const [invoicesList, setInvoicesList] = useState([]);
  const [loadingBilling, setLoadingBilling] = useState(false);

  /* Formulario de Nueva Cotización */
  const [newQuotation, setNewQuotation] = useState({
    client_name: '',
    client_organization: '',
    client_email: '',
    client_phone: '',
    project_title: '',
    description: '',
    subtotal: '',
    tax_amount: '',
    total: '',
    notes: '',
    modules: [
      { module: 'Módulo Principal & Arquitectura Core', hours: 40, amount: 15000 },
      { module: 'Integración de Pagos & Webhooks', hours: 30, amount: 12000 }
    ]
  });

  /* Formulario de Registro de Pago (Anticipo / Abono) */
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [newPayment, setNewPayment] = useState({
    quotation_id: '',
    client_name: '',
    concept: 'Anticipo del 40% - Inicio de Proyecto',
    payment_type: 'anticipo',
    amount: '',
    payment_method: 'SPEI',
    payment_date: new Date().toISOString().split('T')[0],
    proof_url: '',
    notes: ''
  });

  /* Formulario de Facturación CFDI 4.0 */
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    quotation_id: '',
    payment_id: '',
    rfc_receptor: '',
    razon_social_receptor: '',
    regimen_fiscal_receptor: '603 - Personas Morales con Fines no Lucrativos',
    codigo_postal_receptor: '',
    uso_cfdi: 'G03 - Gastos en general',
    subtotal: '',
    iva: '',
    total: ''
  });

  /* Control de Licencias y Abonos SaaS */
  const [licensesList, setLicensesList] = useState([]);
  const [licenseMetrics, setLicenseMetrics] = useState({
    total: 0,
    active: 0,
    blocked: 0,
    expiring_soon: 0,
    total_mrr: 0
  });
  const [loadingLicenses, setLoadingLicenses] = useState(false);
  const [licenseModalOpen, setLicenseModalOpen] = useState(false);
  const [editingLicense, setEditingLicense] = useState(null);
  const [copiedSlug, setCopiedSlug] = useState(null);
  const [licenseSearch, setLicenseSearch] = useState('');
  const [licenseFilter, setLicenseFilter] = useState('todos'); // 'todos', 'activos', 'bloqueados', 'vencidos'
  const [licenseFormData, setLicenseFormData] = useState({
    id: null,
    client_name: '',
    system_slug: '',
    system_url: '',
    active: true,
    blocked: false,
    cutoff_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    grace_days: 3,
    monthly_amount: '3500.00',
    extension_code: 'CRUZSOFT2026',
    alert_message: 'El periodo de suscripción mensual de este sistema ha concluido o requiere abono de mantenimiento.',
    contact_whatsapp: '528781135411',
    contact_email: 'contacto@cruzsoftlabs.com',
    notes: ''
  });

  const projects = [
    {
      id: 1,
      title: 'Portal Institucional & Admisiones Universidad UNIB',
      category: 'saas',
      badge: 'Producción Activa • En Línea',
      description: 'Ecosistema web integral de captación universitaria con módulo automatizado de solicitud de fichas de ingreso, consulta de estatus en tiempo real, gestión de oferta académica y portal de autenticación institucional.',
      tags: ['Laravel', 'React', 'Tailwind CSS', 'Control de Fichas', 'Portal Estudiantil'],
      metrics: 'Gestión ágil de aspirantes con procesamiento instantáneo de solicitudes y validaciones.',
      image: '/images/proyecto_unib.png',
      featured: true,
      client: 'Universidad Interamericana del Bravo (UNIB)'
    },
    {
      id: 2,
      title: 'Plataforma Digital & Control de Ingreso CBTis 239',
      category: 'fintech',
      badge: 'Módulo Crítico • Operativo',
      description: 'Sistema centralizado para la emisión y modificación de fichas de preinscripción, aviso oportuno a la comunidad escolar, módulo para docentes, estudiantes y pasarela de validación administrativa.',
      tags: ['Laravel', 'PHP 8.5', 'Control Escolar', 'Gestión de Fichas', 'MySQL'],
      metrics: 'Procesamiento masivo de aspirantes durante periodos pico de admisión sin interrupciones.',
      image: '/images/proyecto_cbtis_moderno.png',
      featured: true,
      client: 'Centro de Bachillerato Tecnológico Industrial y de Servicios No. 239'
    },
    {
      id: 3,
      title: 'Portal Web Oficial & Sistema SISEEMS CBTis 239',
      category: 'saas',
      badge: 'Plataforma Oficial • En Uso',
      description: 'Plataforma institucional robusta con integración al sistema SISEEMS, fotogalería dinámica, publicación de convocatorias, guías de estudio descargables y módulo de control de preinscripciones con soporte multisede.',
      tags: ['Laravel Core', 'Seguridad Web', 'SISEEMS Integration', 'Optimización SEO'],
      metrics: 'Alta disponibilidad garantizada y diseño adaptable para navegación móvil y de escritorio.',
      image: '/images/proyecto_cbtis_portal.png',
      featured: true,
      client: 'CBTis 239 Plantel Escolar'
    },
    {
      id: 4,
      title: 'Motor Centralizado de Pagos & Conciliación Financiera',
      category: 'fintech',
      badge: 'Arquitectura Enterprise',
      description: 'Módulo transversal desarrollado para la validación automática de pagos, conciliación de depósitos bancarios, control de folios irrepetibles y generación inmediata de comprobantes digitales de inscripción.',
      tags: ['Laravel 11', 'Pasarelas de Pago', 'Redis Cache', 'Webhooks', 'Reportes PDF'],
      metrics: '100% de trazabilidad financiera, reducción de errores de cobranza a 0%.',
      image: '/images/logo.png',
      featured: false,
      client: 'Sistemas Educativos & Comerciales'
    }
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-sky-400" />,
      title: 'Desarrollo Full Stack a Medida',
      description: 'Construcción de aplicaciones web potentes y escalables desde cero, adaptadas con precisión quirúrgica a las reglas de negocio de tu organización.',
      highlight: 'Laravel + React + Tailwind'
    },
    {
      icon: <Layers className="w-8 h-8 text-amber-400" />,
      title: 'Sistemas de Pagos & Inscripciones',
      description: 'Implementación de flujos de registro, integración con pasarelas de pago locales e internacionales, webhooks y validación de comprobantes digitales.',
      highlight: 'Seguridad & Conciliación Automatizada'
    },
    {
      icon: <Server className="w-8 h-8 text-sky-400" />,
      title: 'Arquitectura de Software & APIs',
      description: 'Diseño de arquitecturas desacopladas, microservicios, optimización de consultas SQL y desarrollo de APIs seguras y documentadas.',
      highlight: 'Rendimiento Extremo & Clean Code'
    },
    {
      icon: <Cpu className="w-8 h-8 text-amber-400" />,
      title: 'Modernización & Refactorización',
      description: 'Transformación de sistemas obsoletos hacia stacks modernos y eficientes en servidor Laravel sin interrumpir la operación continua del negocio.',
      highlight: 'Migración Segura y Cero Caídas'
    }
  ];

  const stats = [
    { value: '+8', label: 'Años de Experiencia en Ingeniería' },
    { value: '+45', label: 'Sistemas & Módulos Implementados' },
    { value: '99.9%', label: 'Uptime & Fiabilidad en Producción' },
    { value: '100%', label: 'Código Limpio & Escalable' }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const fetchBillingData = async () => {
    setLoadingBilling(true);
    try {
      const [resMetrics, resQuots, resPays, resInvs] = await Promise.all([
        fetch('/api/billing/metrics').then(r => r.json()),
        fetch('/api/billing/quotations').then(r => r.json()),
        fetch('/api/billing/payments').then(r => r.json()),
        fetch('/api/billing/invoices').then(r => r.json())
      ]);
      if (resMetrics.metrics) setBillingMetrics(resMetrics.metrics);
      if (Array.isArray(resQuots)) setQuotationsList(resQuots);
      if (Array.isArray(resPays)) setPaymentsList(resPays);
      if (Array.isArray(resInvs)) setInvoicesList(resInvs);
    } catch (err) {
      console.error('Error cargando módulo financiero del backend:', err);
    } finally {
      setLoadingBilling(false);
    }
  };

  const handleCreateQuotation = async (e) => {
    e.preventDefault();
    try {
      const sub = parseFloat(newQuotation.subtotal) || 0;
      const iva = sub * 0.16;
      const tot = sub + iva;
      const res = await fetch('/api/billing/quotations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...newQuotation,
          subtotal: sub,
          tax_amount: iva,
          total: tot,
          modules_breakdown: newQuotation.modules
        })
      });
      const data = await res.json();
      if (data.quotation) {
        toast.success('¡Cotización guardada exitosamente en el backend!');
        setActivePortalTab('quotations');
        fetchBillingData();
      }
    } catch (err) {
      toast.error('Error al guardar cotización');
    }
  };

  const handleCreatePayment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/billing/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(newPayment)
      });
      const data = await res.json();
      if (data.payment) {
        toast.success('¡Pago registrado con éxito en el sistema!');
        setPaymentModalOpen(false);
        fetchBillingData();
      }
    } catch (err) {
      toast.error('Error al registrar pago');
    }
  };

  const handleCreateInvoice = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/billing/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(newInvoice)
      });
      const data = await res.json();
      if (data.invoice) {
        toast.success('¡Factura CFDI 4.0 timbrada y registrada con folio ' + data.invoice.invoice_folio + '!');
        setInvoiceModalOpen(false);
        fetchBillingData();
      }
    } catch (err) {
      toast.error('Error al generar factura');
    }
  };

  /* Acciones de Control de Licencias y Suscripciones SaaS */
  const fetchLicenses = async () => {
    setLoadingLicenses(true);
    try {
      const res = await fetch('/api/licenses');
      const data = await res.json();
      if (data.licenses) {
        setLicensesList(data.licenses);
        setLicenseMetrics(data.metrics || {});
      }
    } catch (err) {
      console.error('Error al cargar licencias:', err);
      toast.error('Error al conectar con el servidor de licencias');
    } finally {
      setLoadingLicenses(false);
    }
  };

  const handleToggleBlocked = async (id) => {
    try {
      const res = await fetch(`/api/licenses/${id}/toggle-blocked`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchLicenses();
      } else {
        toast.error(data.message || 'Error al cambiar estado');
      }
    } catch (err) {
      toast.error('Error de red al actualizar licencia');
    }
  };

  const handleExtendLicense = async (id, days = 30) => {
    try {
      const res = await fetch(`/api/licenses/${id}/extend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ days })
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchLicenses();
      } else {
        toast.error(data.message || 'Error al extender servicio');
      }
    } catch (err) {
      toast.error('Error de red al extender servicio');
    }
  };

  const handleSaveLicense = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/licenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(licenseFormData)
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message || 'Licencia guardada exitosamente');
        setLicenseModalOpen(false);
        fetchLicenses();
      } else {
        toast.error(data.message || 'Error al guardar licencia');
      }
    } catch (err) {
      toast.error('Error al procesar solicitud');
    }
  };

  const handleDeleteLicense = async (id, clientName) => {
    if (!confirm(`¿Estás seguro de eliminar el control de licencia de "${clientName}"?`)) return;
    try {
      const res = await fetch(`/api/licenses/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json'
        }
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message || 'Licencia eliminada');
        fetchLicenses();
      }
    } catch (err) {
      toast.error('Error al eliminar');
    }
  };

  const openNewLicenseModal = () => {
    setEditingLicense(null);
    setLicenseFormData({
      id: null,
      client_name: '',
      system_slug: '',
      system_url: '',
      active: true,
      blocked: false,
      cutoff_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      grace_days: 3,
      monthly_amount: '3500.00',
      extension_code: 'CRUZSOFT2026',
      alert_message: 'El periodo de suscripción mensual de este sistema ha concluido o requiere abono de mantenimiento.',
      contact_whatsapp: '528781135411',
      contact_email: 'contacto@cruzsoftlabs.com',
      notes: ''
    });
    setLicenseModalOpen(true);
  };

  const openEditLicenseModal = (lic) => {
    setEditingLicense(lic);
    setLicenseFormData({
      id: lic.id,
      client_name: lic.client_name,
      system_slug: lic.system_slug,
      system_url: lic.system_url || '',
      active: lic.active,
      blocked: lic.blocked,
      cutoff_date: lic.cutoff_date || '',
      grace_days: lic.grace_days,
      monthly_amount: lic.monthly_amount,
      extension_code: lic.extension_code || '',
      alert_message: lic.alert_message || '',
      contact_whatsapp: lic.contact_whatsapp || '',
      contact_email: lic.contact_email || '',
      notes: lic.notes || ''
    });
    setLicenseModalOpen(true);
  };

  const copyToClipboard = (text, slug) => {
    navigator.clipboard.writeText(text);
    setCopiedSlug(slug);
    toast.success('¡URL JSON de verificación copiada al portapapeles!');
    setTimeout(() => setCopiedSlug(null), 2500);
  };

  const filteredLicenses = licensesList.filter((lic) => {
    const q = licenseSearch.trim().toLowerCase();
    const matchesSearch = !q ||
      lic.client_name?.toLowerCase().includes(q) ||
      lic.system_slug?.toLowerCase().includes(q) ||
      lic.system_url?.toLowerCase().includes(q);

    if (!matchesSearch) return false;

    if (licenseFilter === 'activos') {
      return lic.active && !lic.blocked && !lic.esta_vencido;
    }
    if (licenseFilter === 'bloqueados') {
      return lic.blocked;
    }
    if (licenseFilter === 'vencidos') {
      return lic.esta_vencido || (lic.dias_restantes !== null && lic.dias_restantes <= 7);
    }
    return true;
  });

  const fetchProposals = async (status = proposalFilter, search = proposalSearch) => {
    setLoadingProposals(true);
    try {
      let url = '/api/admin/proposals?';
      if (status && status !== 'todos') url += `status=${status}&`;
      if (search) url += `search=${encodeURIComponent(search)}&`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setProposalsList(data.proposals);
        setProposalsStats(data.stats);
      }
    } catch (err) {
      console.error('Error al cargar propuestas del backend:', err);
    } finally {
      setLoadingProposals(false);
    }
  };

  const checkSession = async () => {
    try {
      const res = await fetch('/api/auth/check');
      const data = await res.json();
      if (data.authenticated) {
        setCurrentUser(data.user);
      }
    } catch (err) {
      // no auth
    }
  };

  useEffect(() => {
    fetch('/api/auth/check')
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setCurrentUser(data.user);
          fetchLicenses();

          const path = window.location.pathname;
          const urlParams = new URLSearchParams(window.location.search);
          if (path.includes('/licencias') || urlParams.get('portal') === 'licenses' || urlParams.get('tab') === 'licenses') {
            setActivePortalTab('licenses');
            setPortalOpen(true);
          }
        } else {
          const path = window.location.pathname;
          const urlParams = new URLSearchParams(window.location.search);
          if (path.includes('/licencias') || urlParams.get('portal') === 'licenses' || urlParams.get('tab') === 'licenses') {
            setActivePortalTab('licenses');
            setAuthModalOpen(true);
          }
        }
      })
      .catch(() => {});
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const data = await res.json();
      if (data.success) {
        setCurrentUser(data.user);
        setAuthModalOpen(false);
        setPortalOpen(true);
        fetchProposals();
        fetchBillingData();
        fetchLicenses();
      } else {
        setAuthError(data.message || 'Credenciales incorrectas');
      }
    } catch (err) {
      setAuthError('Error de conexión con el servidor Laravel.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setCurrentUser(null);
      setPortalOpen(false);
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/admin/proposals/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        fetchProposals();
      }
    } catch (err) {
      console.error('Error al actualizar estado:', err);
    }
  };

  const handleDeleteProposal = (id) => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-slate-200">¿Estás seguro de eliminar esta propuesta?</p>
        <div className="flex gap-2">
          <button 
            className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                const res = await fetch('/api/admin/proposals/' + id, { method: 'DELETE' });
                const data = await res.json();
                if (data.success) {
                  fetchProposals();
                  toast.success('Propuesta eliminada');
                }
              } catch (err) {
                console.error('Error al eliminar propuesta:', err);
                toast.error('Error al eliminar propuesta');
              }
            }}
          >
            Sí, eliminar
          </button>
          <button 
            className="px-3 py-1.5 bg-slate-700 text-slate-200 rounded hover:bg-slate-600 text-sm"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
        </div>
      </div>
    ), { duration: Infinity });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message
        })
      });
      const data = await res.json();
      if (data.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', projectType: 'Sistema de Inscripción & Pagos', budget: '$1,000 - $3,000 USD', message: '' });
      }
    } catch (err) {
      console.error('Error enviando formulario al backend Laravel:', err);
      // Fallback amigable
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 relative overflow-hidden bg-cyber-grid">
      <Toaster position="top-center" toastOptions={{ style: { background: "#1e293b", color: "#fff" } }} />
      {/* Glow auroras */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-sky-600/20 via-blue-700/20 to-amber-500/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/15 via-cyan-500/10 to-transparent blur-[130px] pointer-events-none rounded-full" />

      {/* Glassmorphic Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-7xl mx-auto backdrop-blur-xl bg-[#090e1d]/85 border border-white/10 rounded-2xl px-5 py-3.5 shadow-2xl flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              alt="Cruz Software Labs Logo" 
              className="h-24 w-24 rounded-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]" 
            />
            <div className="flex flex-col leading-none justify-center mt-1"><span className="font-extrabold text-3xl tracking-widest text-amber-400 font-sans">CRUZ</span><span className="font-extrabold text-3xl tracking-widest text-gradient-blue font-sans">SOFTLABS</span></div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#servicios" className="hover:text-sky-400 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-sky-400 transition-colors">Proyectos</a>
            <a href="#stack" className="hover:text-sky-400 transition-colors">Stack Tecnológico</a>
            <a href="#sobre-mi" className="hover:text-sky-400 transition-colors">Perfil</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <button 
                onClick={() => { setPortalOpen(true); fetchProposals(); }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-950/70 border border-sky-500/40 text-sky-300 hover:text-white hover:bg-sky-900/60 text-xs font-bold transition-all"
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Portal Lab</span>
                <span className="px-1.5 py-0.5 rounded-full bg-sky-500/20 text-[10px] text-sky-300">
                  {proposalsStats.pendientes || 0}
                </span>
              </button>
            ) : (
              <button 
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-white hover:border-amber-500/40 text-xs font-semibold transition-all"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Iniciar Sesión</span>
              </button>
            )}

            <a 
              href="#contacto" 
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-600 to-amber-500 rounded-xl transition-all duration-300 group-hover:opacity-90" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-[#090e1d] text-white text-xs sm:text-sm font-semibold transition-all duration-300 group-hover:bg-opacity-80">
                <span>Cotizar Proyecto</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 backdrop-blur-2xl bg-[#090e1d]/95 border border-white/10 rounded-2xl flex flex-col gap-4 text-center text-sm font-medium">
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-400">Servicios</a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-400">Proyectos</a>
            <a href="#stack" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-400">Stack Tecnológico</a>
            <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-400">Perfil</a>
            
            <button 
              onClick={() => { setMobileMenuOpen(false); if (currentUser) { setPortalOpen(true); fetchProposals(); } else { setAuthModalOpen(true); } }}
              className="py-2.5 px-4 rounded-xl bg-slate-900 border border-white/10 font-semibold text-slate-200 flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4 text-amber-400" />
              <span>{currentUser ? 'Entrar al Portal' : 'Iniciar Sesión (Admin)'}</span>
            </button>

            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 font-semibold text-white">
              Cotizar Proyecto
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Disponible para Desarrollo de Sistemas & Consultoría Senior</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
            Ingeniería de Software de Alto Impacto con <span className="text-gradient-blue">Laravel</span> & <span className="text-gradient-gold">React</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            En <strong className="text-white font-semibold">Cruz Software Labs</strong> diseño y construyo plataformas web ultrarrápidas, sistemas de control financiero, pasarelas de pago y arquitecturas escalables con backend en Laravel.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#proyectos" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-sky-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explorar Sistemas & Proyectos</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contacto" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Hablar con el Desarrollador</span>
              <MessageSquare className="w-5 h-5 text-amber-400" />
            </a>
          </div>

          {/* Live Preview Card */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500/40 via-amber-500/30 to-blue-600/40 rounded-3xl blur-2xl opacity-40" />
            <div className="relative rounded-2xl border border-white/10 bg-[#0b1122]/95 backdrop-blur-xl shadow-2xl p-4 sm:p-6 text-left overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs text-slate-400 font-mono">cruzsoft-lab ~ laravel-server (Laragon)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-sky-400 font-mono">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  LARAVEL 11 / PHP 8.5 ACTIVE
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Inscripciones & Pagos</div>
                      <div className="text-lg font-bold text-white">Conciliación Total</div>
                    </div>
                  </div>
                  <div className="text-xs text-emerald-400">Control de folios y comprobantes</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Arquitectura Limpia</div>
                      <div className="text-lg font-bold text-white">Roles & Permisos</div>
                    </div>
                  </div>
                  <div className="text-xs text-amber-400">Seguridad y auditoría activa</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Performance Frontend</div>
                      <div className="text-lg font-bold text-white">Carga Instantánea</div>
                    </div>
                  </div>
                  <div className="text-xs text-sky-400">Vite + React + Tailwind</div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-[#060a14] border border-white/5 font-mono text-xs text-slate-300 flex items-center justify-between">
                <span className="text-sky-400">
                  <span className="text-amber-400 font-bold">CRUZ_SOFT_LAB</span> &gt; Servidor: <span className="text-emerald-400">Laravel (Laragon / php artisan serve)</span> • Frontend: React + Tailwind
                </span>
                <span className="text-slate-500 text-[11px] hidden sm:inline">PHP 8.5 • MySQL • React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5 bg-[#070c18]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Especialidades & Servicios
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4">
              Soluciones de Software Diseñadas para Ganar en el Mercado
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              No solo desarrollo código; entrego soluciones integrales con arquitecturas preparadas para alta concurrencia y máxima rentabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="mb-6 p-4 rounded-xl bg-slate-900/80 border border-white/5 inline-block group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {srv.description}
                </p>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-semibold">{srv.highlight}</span>
                  <span className="text-sky-400 flex items-center gap-1 font-medium group-hover:translate-x-1 transition-transform">
                    Conocer más <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070b16]/70 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                Portafolio de Sistemas
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4">
                Proyectos & Plataformas Destacadas
              </h2>
              <p className="mt-3 text-slate-400 text-base max-w-xl">
                Sistemas desarrollados con meticulosidad, aplicando buenas prácticas como Clean Architecture y optimizaciones para producción.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {[
                { key: 'all', label: 'Todos' },
                { key: 'fintech', label: 'FinTech / Pagos' },
                { key: 'saas', label: 'SaaS & Enterprise' },
                { key: 'api', label: 'APIs & Backend' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map(proj => (
              <div 
                key={proj.id}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-sky-500/50 transition-all duration-500 group flex flex-col hover:shadow-2xl hover:shadow-sky-500/10"
              >
                {/* Project Visual Showcase (Screenshot) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-white/10 group">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1d] via-[#090e1d]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badges on top of image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-400 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      {proj.badge}
                    </span>

                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/85 backdrop-blur-md border border-white/10 text-slate-300">
                      {proj.client}
                    </span>
                  </div>

                  {/* Title overlay in image lower edge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-md group-hover:text-sky-300 transition-colors">
                      {proj.title}
                    </h4>
                  </div>
                </div>

                {/* Body & Descriptions */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="mt-5 p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/20 text-xs text-sky-300 flex items-center gap-3">
                      <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                      <span className="font-medium">{proj.metrics}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-900/90 border border-white/10 text-slate-300 group-hover:border-sky-500/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Arquitectura Validada en Producción</span>
                      </span>

                      {proj.id !== 1 && (
                        <a 
                          href="#contacto"
                          className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors group-hover:translate-x-1 duration-300"
                        >
                          <span>Solicitar demo</span>
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Stack de Última Generación
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4">
              Tecnologías Probadas en Batalla
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Herramientas de vanguardia para garantizar velocidad de entrega, mantenibilidad y rendimiento óptimo en servidor Laravel.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: 'Laravel 11', cat: 'Backend Framework', icon: <LaravelLogo className="w-10 h-10 mx-auto" /> },
              { name: 'React 18/19', cat: 'Frontend Reactive', icon: <ReactLogo className="w-10 h-10 mx-auto" /> },
              { name: 'Tailwind CSS', cat: 'Estilos Modernos', icon: <TailwindLogo className="w-10 h-10 mx-auto" /> },
              { name: 'PHP 8.5', cat: 'Servidor Robusto', icon: <PhpLogo className="w-10 h-10 mx-auto" /> },
              { name: 'PostgreSQL / MySQL', cat: 'Bases de Datos', icon: <PostgresLogo className="w-10 h-10 mx-auto" /> },
              { name: 'Docker / Redis', cat: 'DevOps & Cache', icon: <DockerRedisLogo className="w-10 h-10 mx-auto" /> },
              { name: 'Laragon', cat: 'Entorno de Servidor', icon: <LaragonLogo className="w-10 h-10 mx-auto" /> },
            ].map((tech, i) => (
              <div 
                key={i} 
                className="p-5 rounded-2xl glass-panel text-center hover:border-sky-400/50 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 flex flex-col justify-center items-center"
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center h-12 w-12">
                  {tech.icon}
                </div>
                <div className="font-bold text-white text-sm group-hover:text-sky-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {tech.cat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060b17]/80 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-amber-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
                <div className="relative p-6 rounded-3xl bg-[#0a1122] border border-white/10 max-w-sm text-center">
                  <img 
                    src="/images/logo.png" 
                    alt="JJ Cruz" 
                    className="w-44 h-44 object-contain mx-auto mb-4 drop-shadow-[0_0_25px_rgba(0,149,255,0.4)]" 
                  />
                  <h3 className="text-2xl font-black text-white">Ing. J.J. Cruz</h3>
                  <p className="text-sky-400 text-sm font-semibold mt-1">Senior Full Stack & Software Architect</p>
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                    Fundador y Director Tecnológico en <strong className="text-amber-400">Cruz Software Labs</strong>. Apasionado por resolver problemas complejos mediante software elegante, seguro y escalable.
                  </p>
                  <div className="mt-6 flex justify-center gap-3">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white transition-colors" aria-label="GitHub">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="mailto:juan.cruz@cruzsoftlabs.com" className="p-2 rounded-lg bg-slate-900 hover:bg-amber-500 text-slate-300 hover:text-slate-950 transition-colors" aria-label="Email">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest font-bold text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                Sobre el Ingeniero & Laboratorio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 leading-tight">
                Construcción de soluciones de software confiables con el poder de Laravel y React.
              </h2>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Con amplia experiencia en el ecosistema **PHP / Laravel** y librerías modernas de Frontend como **React** y **Tailwind**, diseño sistemas críticos de alta disponibilidad: motores de facturación, pasarelas de pago y automatización de procesos empresariales.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Compromiso con la puntualidad y las especificaciones técnicas del proyecto.',
                  'Seguridad de datos de extremo a extremo, auditorías y trazabilidad de operaciones.',
                  'Código estructurado, documentado y fácil de mantener.',
                  'Arquitectura escalable en servidores Laravel lista para producción.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Inicia tu Proyecto
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4">
              ¿Listo para Desarrollar tu Próximo Sistema?
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Hablemos sobre tus requerimientos y planifiquemos una solución técnica sólida.
            </p>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido con Éxito!</h3>
                <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                  Gracias por comunicarte con **Cruz Software Labs**. Analizaré los requerimientos de tu proyecto y me pondré en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 text-sm font-semibold"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nombre o Empresa
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ej: Roberto Gómez / TechCorp" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Correo Electrónico
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="tu@empresa.com" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Tipo de Proyecto
                    </label>
                    <select 
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    >
                      <option value="Sistema de Inscripción & Pagos">Sistema de Inscripción & Pagos</option>
                      <option value="Web App / SaaS a Medida">Web App / SaaS a Medida</option>
                      <option value="API / Integración de Sistemas">API / Integración de Sistemas</option>
                      <option value="Modernización de Software Legado">Modernización de Software Legado</option>
                      <option value="Consultoría Técnica">Consultoría Técnica</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Presupuesto Estimado
                    </label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    >
                      <option value="$1,000 - $3,000 USD">$1,000 - $3,000 USD</option>
                      <option value="$3,000 - $7,000 USD">$3,000 - $7,000 USD</option>
                      <option value="$7,000+ USD">$7,000+ USD</option>
                      <option value="Por definir">Por definir / Asesoría previa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Detalles del Requerimiento
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Cuéntame brevemente qué necesitas resolver, metas y plazos..." 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-amber-500 hover:from-sky-400 hover:to-amber-400 text-white font-bold text-base shadow-xl shadow-sky-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Enviando al Servidor Laravel...' : 'Enviar Propuesta de Proyecto'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#04060d] text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Logo Cruz Software Labs" className="h-16 w-16 rounded-full object-contain" />
            <div>
              <span className="font-bold text-white">Cruz Software Labs</span>
              <p className="text-slate-500 text-[10px]">Ingeniería de Software & Arquitectura Web Moderna</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { if (currentUser) { setPortalOpen(true); fetchProposals(); } else { setAuthModalOpen(true); } }}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Acceso Administrativo</span>
            </button>
          </div>
          <div className="text-center sm:text-right text-slate-500">
            <p>© {new Date().getFullYear()} Cruz Software Labs. Todos los derechos reservados.</p>
            <p className="mt-1 text-[11px] text-slate-400">Backend en Laravel 11 • React • Tailwind CSS.</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE LOGIN ADMINISTRATIVO */}
      {authModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#090e1e] border border-sky-500/30 shadow-2xl shadow-sky-500/10 text-left">
            <button 
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="Cruz Software Labs" className="w-12 h-12 rounded-full object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]" />
              <div>
                <h3 className="text-lg font-bold text-white">Portal de Administración</h3>
                <p className="text-xs text-slate-400">Cruz Software Labs ~ Backend Laravel</p>
              </div>
            </div>

            {authError && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Correo del Administrador
                </label>
                <input 
                  type="email" 
                  required
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm"
                  placeholder="juan.cruz@cruzsoftlabs.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Contraseña
                </label>
                <input 
                  type="password" 
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm"
                  placeholder="••••••••"
                />
                
              </div>

              <button 
                type="submit" 
                disabled={authLoading}
                className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>{authLoading ? 'Verificando con Laravel...' : 'Entrar al Portal'}</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PORTAL COMPLETO DE GESTIÓN DE PROPUESTAS (BACKEND MANAGEMENT) */}
      {portalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/90 backdrop-blur-2xl animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-7xl my-auto rounded-3xl bg-[#090e1d] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Header del Portal */}
            <div className="p-5 sm:p-6 border-b border-white/10 bg-slate-900/60 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/images/logo.png" alt="Logo" className="w-9 h-9 object-contain" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">Panel de Gestión y Operaciones</h3>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      LARAVEL BACKEND
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">Administrador activo: <strong className="text-sky-400">{currentUser?.name || 'Ing. Juan José Cruz González'}</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    fetchProposals();
                    fetchBillingData();
                    fetchLicenses();
                  }}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Recargar datos del backend"
                >
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span className="hidden sm:inline">Actualizar</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Cerrar Sesión</span>
                </button>
                <button 
                  onClick={() => setPortalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Pestañas de Navegación del Portal */}
            <div className="px-6 py-3 bg-slate-900/95 border-b border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Barra de Pestañas con botones de alto contraste */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <button
                  type="button"
                  onClick={() => setActivePortalTab('proposals')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activePortalTab === 'proposals'
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 ring-1 ring-sky-300'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-white/5'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 text-sky-400" />
                  <span>Propuestas Web</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-black/40 text-[10px]">{proposalsStats.total || 0}</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActivePortalTab('quotations'); fetchBillingData(); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activePortalTab === 'quotations'
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 font-extrabold ring-1 ring-amber-300'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-white/5'
                  }`}
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Cotizaciones & Presupuestos</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-black/40 text-[10px]">{billingMetrics.count_quotations || quotationsList.length}</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActivePortalTab('payments'); fetchBillingData(); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activePortalTab === 'payments'
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-300'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-white/5'
                  }`}
                >
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>Cobros & Anticipos</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-black/40 text-[10px]">{billingMetrics.count_payments || paymentsList.length}</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActivePortalTab('invoices'); fetchBillingData(); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activePortalTab === 'invoices'
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 ring-1 ring-indigo-300'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-white/5'
                  }`}
                >
                  <Receipt className="w-4 h-4 text-indigo-400" />
                  <span>Facturación CFDI 4.0</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-black/40 text-[10px]">{billingMetrics.count_invoices || invoicesList.length}</span>
                </button>

                {/* BOTÓN DESTACADO DE LICENCIAS SAAS */}
                <button
                  type="button"
                  onClick={() => { setActivePortalTab('licenses'); fetchLicenses(); }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                    activePortalTab === 'licenses'
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xl shadow-rose-600/40 ring-2 ring-rose-400'
                      : 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 shadow-sm'
                  }`}
                >
                  <Key className="w-4 h-4 text-rose-400" />
                  <span className="font-extrabold tracking-wide">Licencias & Abonos SaaS</span>
                  <span className="px-2 py-0.5 rounded-full bg-rose-950/80 text-rose-200 border border-rose-500/30 text-[11px] font-mono font-bold">
                    {licenseMetrics.total || licensesList.length}
                  </span>
                </button>
              </div>

              {/* Botones de Acción Rápida contextuales */}
              <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
                {activePortalTab === 'licenses' && (
                  <button
                    onClick={openNewLicenseModal}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-rose-500/25 transition-all"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Nueva Licencia SaaS</span>
                  </button>
                )}
                {activePortalTab === 'payments' && (
                  <button
                    onClick={() => setPaymentModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Registrar Pago</span>
                  </button>
                )}
                {activePortalTab === 'invoices' && (
                  <button
                    onClick={() => setInvoiceModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Emitir CFDI</span>
                  </button>
                )}
              </div>
            </div>

            {/* BARRA DE MÉTRICAS FINANCIERAS GLOBALES (Siempre visible en el Portal) */}
            <div className="p-4 border-b border-white/5 bg-[#060a14] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-sky-500/20">
                <div className="text-[11px] text-sky-300 font-semibold uppercase tracking-wider">Total Cotizado</div>
                <div className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                  ${Number(billingMetrics.total_cotizado || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                <div className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">Total Cobrado (Pagos/Anticipos)</div>
                <div className="text-lg sm:text-xl font-extrabold text-emerald-400 mt-0.5">
                  ${Number(billingMetrics.total_cobrado || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-amber-500/20">
                <div className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">Saldo Pendiente por Cobrar</div>
                <div className="text-lg sm:text-xl font-extrabold text-amber-400 mt-0.5">
                  ${Number(billingMetrics.total_pendiente || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-indigo-500/20">
                <div className="text-[11px] text-indigo-400 font-semibold uppercase tracking-wider">Facturado Fiscal CFDI 4.0</div>
                <div className="text-lg sm:text-xl font-extrabold text-indigo-400 mt-0.5">
                  ${Number(billingMetrics.total_facturado || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                </div>
              </div>
            </div>

            {/* CONTENIDO SEGÚN LA PESTAÑA ACTIVA */}
            {activePortalTab === 'proposals' && (
              <>
                {/* Filtros y Búsqueda */}
                <div className="p-4 bg-slate-900/40 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-xs text-slate-400 font-semibold">Filtrar:</span>
                    {['todos', 'pendiente', 'en_revision', 'contactado', 'aceptado'].map(f => (
                      <button
                        key={f}
                        onClick={() => { setProposalFilter(f); fetchProposals(f, proposalSearch); }}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                          proposalFilter === f 
                            ? 'bg-sky-500 text-white shadow-sm' 
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {f.replace('_', ' ')}
                      </button>
                    ))}
                  </div>

                  <div className="w-full sm:w-64 relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text"
                      placeholder="Buscar por cliente o proyecto..."
                      value={proposalSearch}
                      onChange={(e) => {
                        setProposalSearch(e.target.value);
                        fetchProposals(proposalFilter, e.target.value);
                      }}
                      className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                {/* Lista de Propuestas */}
                <div className="p-5 overflow-y-auto flex-1 space-y-4">
                  {loadingProposals ? (
                    <div className="py-12 text-center text-slate-400 text-sm">
                      Cargando propuestas desde la base de datos de Laravel...
                    </div>
                  ) : proposalsList.length === 0 ? (
                    <div className="py-12 text-center text-slate-500 text-sm">
                      No hay propuestas registradas con este filtro.
                    </div>
                  ) : (
                    proposalsList.map(prop => (
                      <div 
                        key={prop.id}
                        className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-sky-500/30 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="font-bold text-white text-base">{prop.name}</span>
                            <span className="text-xs text-slate-400">({prop.email})</span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              prop.status === 'pendiente' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                              prop.status === 'en_revision' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' :
                              prop.status === 'contactado' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                              'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            }`}>
                              {prop.status.replace('_', ' ')}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-3">
                            <span className="text-sky-300 font-semibold">Tipo: {prop.project_type}</span>
                            <span className="text-amber-300">Presupuesto: {prop.budget}</span>
                            <span className="text-slate-500">Recibido: {new Date(prop.created_at).toLocaleDateString()}</span>
                          </div>

                          <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-white/5 leading-relaxed">
                            {prop.message}
                          </p>
                        </div>

                        {/* Acciones */}
                        <div className="flex items-center gap-2 lg:flex-col shrink-0">
                          <select 
                            value={prop.status}
                            onChange={(e) => handleUpdateStatus(prop.id, e.target.value)}
                            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-sky-500"
                          >
                            <option value="pendiente">Marcar Pendiente</option>
                            <option value="en_revision">En Revisión</option>
                            <option value="contactado">Contactado</option>
                            <option value="aceptado">Aceptado</option>
                          </select>

                          <a 
                            href={`mailto:${prop.email}?subject=Propuesta%20de%20Proyecto%20-%20Cruz%20Software%20Labs`}
                            className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors text-center w-full"
                          >
                            Responder Email
                          </a>

                          <button 
                            onClick={() => handleDeleteProposal(prop.id)}
                            className="px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold transition-colors"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}

            {/* TAB: COTIZACIONES & PRESUPUESTOS (Con el documento oficial Docx integrado) */}
            {activePortalTab === 'quotations' && (
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-amber-400" />
                      <span>Catálogo de Cotizaciones & Propuestas Técnicas Formales</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Gestiona cotizaciones detalladas con desglose de horas, términos de anticipos (40/30/30%) y descarga de documentos Word/PDF.
                    </p>
                  </div>
                  <button
                    onClick={() => setActivePortalTab('new_quotation')}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all shrink-0"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Crear Nueva Cotización</span>
                  </button>
                </div>

                {loadingBilling ? (
                  <div className="py-16 text-center text-slate-400 text-sm">Cargando cotizaciones del servidor...</div>
                ) : quotationsList.length === 0 ? (
                  <div className="py-16 text-center text-slate-500 text-sm">No hay cotizaciones registradas en el sistema.</div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {quotationsList.map(quot => (
                      <div 
                        key={quot.id}
                        className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
                                {quot.folio}
                              </span>
                              <h5 className="font-bold text-white text-base">{quot.project_title}</h5>
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                quot.status === 'liquidada' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                quot.status === 'en_cobro' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' :
                                quot.status === 'aceptada' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                                'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              }`}>
                                {quot.status.replace('_', ' ')}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2">
                              <span>Cliente: <strong className="text-slate-200">{quot.client_name}</strong></span>
                              {quot.client_organization && <span>Institución: <strong className="text-sky-300">{quot.client_organization}</strong></span>}
                              {quot.valid_until && <span>Vigencia: <strong className="text-amber-300">{new Date(quot.valid_until).toLocaleDateString()}</strong></span>}
                            </div>
                          </div>

                          <div className="text-right lg:shrink-0">
                            <div className="text-xs text-slate-400">Total con IVA:</div>
                            <div className="text-xl font-black text-amber-400">
                              ${Number(quot.total).toLocaleString('es-MX', { minimumFractionDigits: 2 })} {quot.currency}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              Subtotal: ${Number(quot.subtotal).toLocaleString('es-MX', { minimumFractionDigits: 2 })} + IVA 16%
                            </div>
                          </div>
                        </div>

                        {/* Descripción y resumen */}
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {quot.description}
                        </p>

                        {/* Desglose de Módulos */}
                        {quot.modules_breakdown && (
                          <div className="mb-4 bg-slate-950/60 rounded-xl p-4 border border-white/5">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Desglose de Módulos & Horas Cotizadas:</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                              {(typeof quot.modules_breakdown === 'string' ? JSON.parse(quot.modules_breakdown) : quot.modules_breakdown).map((m, idx) => (
                                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-white/5">
                                  <span className="text-slate-300 font-medium truncate mr-2">{m.module}</span>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <span className="text-sky-400 text-[11px]">{m.hours} hrs</span>
                                    <span className="text-emerald-400 font-bold">${Number(m.amount).toLocaleString('es-MX')}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Esquema de Cobro por Hitos */}
                        {quot.milestones_terms && (
                          <div className="mb-4">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Esquema de Cobro (Anticipo / Hitos / Finiquito):</div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {(typeof quot.milestones_terms === 'string' ? JSON.parse(quot.milestones_terms) : quot.milestones_terms).map((mil, idx) => (
                                <div key={idx} className={`p-3 rounded-xl border text-xs ${
                                  mil.status === 'pagado'
                                    ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                                    : 'bg-slate-950/50 border-white/5 text-slate-300'
                                }`}>
                                  <div className="flex items-center justify-between font-bold">
                                    <span>{mil.percentage}% {mil.milestone.split(' ')[0]}</span>
                                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                                      mil.status === 'pagado' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                                    }`}>
                                      {mil.status}
                                    </span>
                                  </div>
                                  <div className="text-sm font-extrabold text-white mt-1">
                                    ${Number(mil.amount).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Barra de Acciones */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5 text-xs">
                          <div className="flex items-center gap-2">
                            {quot.document_url && (
                              <a
                                href={quot.document_url}
                                download
                                className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-semibold flex items-center gap-1.5 transition-all"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Descargar Documento Oficial (.docx)</span>
                              </a>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setNewPayment({
                                  ...newPayment,
                                  quotation_id: quot.id,
                                  client_name: quot.client_organization || quot.client_name,
                                  amount: (quot.total * 0.4).toFixed(2),
                                  concept: `Anticipo 40% - ${quot.project_title}`
                                });
                                setPaymentModalOpen(true);
                              }}
                              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1.5 transition-colors"
                            >
                              <DollarSign className="w-3.5 h-3.5" />
                              <span>Registrar Cobro / Anticipo</span>
                            </button>

                            <button
                              onClick={() => {
                                setNewInvoice({
                                  ...newInvoice,
                                  quotation_id: quot.id,
                                  razon_social_receptor: quot.client_organization || quot.client_name,
                                  subtotal: (quot.subtotal * 0.4).toFixed(2),
                                  iva: (quot.subtotal * 0.4 * 0.16).toFixed(2),
                                  total: (quot.subtotal * 0.4 * 1.16).toFixed(2)
                                });
                                setInvoiceModalOpen(true);
                              }}
                              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-1.5 transition-colors"
                            >
                              <Receipt className="w-3.5 h-3.5" />
                              <span>Generar Factura</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB: NUEVA COTIZACIÓN */}
            {activePortalTab === 'new_quotation' && (
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-sky-400" />
                    <span>Elaborar Nueva Cotización de Software</span>
                  </h4>
                  <button
                    onClick={() => setActivePortalTab('quotations')}
                    className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-xl bg-slate-800"
                  >
                    Volver al Catálogo
                  </button>
                </div>

                <form onSubmit={handleCreateQuotation} className="space-y-4 max-w-4xl text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 font-semibold mb-1">Nombre del Cliente / Responsable *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Lic. Eliud Abib Cadena Toledo"
                        value={newQuotation.client_name}
                        onChange={(e) => setNewQuotation({...newQuotation, client_name: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 font-semibold mb-1">Institución / Empresa</label>
                      <input
                        type="text"
                        placeholder="Ej. Universidad Interamericana del Bravo"
                        value={newQuotation.client_organization}
                        onChange={(e) => setNewQuotation({...newQuotation, client_organization: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-slate-400 font-semibold mb-1">Título del Proyecto *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Sistema Escolar Click & Collect QR"
                        value={newQuotation.project_title}
                        onChange={(e) => setNewQuotation({...newQuotation, project_title: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 font-semibold mb-1">Subtotal (MXN) *</label>
                      <input
                        type="number"
                        required
                        placeholder="73500.00"
                        value={newQuotation.subtotal}
                        onChange={(e) => {
                          const sub = parseFloat(e.target.value) || 0;
                          setNewQuotation({
                            ...newQuotation,
                            subtotal: e.target.value,
                            tax_amount: (sub * 0.16).toFixed(2),
                            total: (sub * 1.16).toFixed(2)
                          });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 font-semibold mb-1">Total con IVA (16%)</label>
                      <div className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-amber-400 font-bold">
                        ${Number(newQuotation.total || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Descripción y Alcances del Proyecto</label>
                    <textarea
                      rows={3}
                      placeholder="Describe los entregables, pasarelas de pago, validación QR, etc."
                      value={newQuotation.description}
                      onChange={(e) => setNewQuotation({...newQuotation, description: e.target.value})}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  {/* Editor Interactivo de Módulos y Servicios Acordados */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span>Módulos y Servicios a Cotizar</span>
                        <span className="text-[10px] text-slate-400 font-normal">(Se incluirán en la tabla formal del documento Word)</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...(newQuotation.modules || []), { module: 'Nuevo Módulo / Servicio', hours: 20, amount: 8000 }];
                          const newSub = updated.reduce((acc, m) => acc + (parseFloat(m.amount) || 0), 0);
                          setNewQuotation({
                            ...newQuotation,
                            modules: updated,
                            subtotal: newSub.toFixed(2),
                            tax_amount: (newSub * 0.16).toFixed(2),
                            total: (newSub * 1.16).toFixed(2)
                          });
                        }}
                        className="px-2.5 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-[11px] font-semibold flex items-center gap-1 transition-all"
                      >
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>Agregar Módulo</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {(newQuotation.modules || []).map((mod, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-white/5">
                          <input
                            type="text"
                            placeholder="Nombre del Módulo o Servicio"
                            value={mod.module}
                            onChange={(e) => {
                              const updated = [...newQuotation.modules];
                              updated[idx].module = e.target.value;
                              setNewQuotation({...newQuotation, modules: updated});
                            }}
                            className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                          />
                          <div className="flex items-center gap-2 w-full sm:w-auto">
                            <div className="flex items-center gap-1">
                              <input
                                type="number"
                                placeholder="Horas"
                                value={mod.hours}
                                onChange={(e) => {
                                  const updated = [...newQuotation.modules];
                                  updated[idx].hours = parseInt(e.target.value) || 0;
                                  setNewQuotation({...newQuotation, modules: updated});
                                }}
                                className="w-20 px-2 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-white text-xs text-center focus:outline-none focus:border-sky-500"
                              />
                              <span className="text-[11px] text-slate-400">hrs</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <span className="text-xs text-emerald-400 font-bold">$</span>
                              <input
                                type="number"
                                placeholder="Importe"
                                value={mod.amount}
                                onChange={(e) => {
                                  const updated = [...newQuotation.modules];
                                  updated[idx].amount = parseFloat(e.target.value) || 0;
                                  const newSub = updated.reduce((acc, m) => acc + (parseFloat(m.amount) || 0), 0);
                                  setNewQuotation({
                                    ...newQuotation,
                                    modules: updated,
                                    subtotal: newSub.toFixed(2),
                                    tax_amount: (newSub * 0.16).toFixed(2),
                                    total: (newSub * 1.16).toFixed(2)
                                  });
                                }}
                                className="w-24 px-2 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-emerald-400 font-bold text-xs text-right focus:outline-none focus:border-emerald-500"
                              />
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                const updated = newQuotation.modules.filter((_, i) => i !== idx);
                                const newSub = updated.reduce((acc, m) => acc + (parseFloat(m.amount) || 0), 0);
                                setNewQuotation({
                                  ...newQuotation,
                                  modules: updated,
                                  subtotal: newSub.toFixed(2),
                                  tax_amount: (newSub * 0.16).toFixed(2),
                                  total: (newSub * 1.16).toFixed(2)
                                });
                              }}
                              className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                              title="Quitar módulo"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setActivePortalTab('quotations')}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition-all shadow-lg shadow-sky-500/20"
                    >
                      Guardar Cotización en Laravel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB: COBRO & PAGOS (ANTICIPOS, ABONOS, LIQUIDACIONES) */}
            {activePortalTab === 'payments' && (
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-emerald-400" />
                      <span>Control Financiero: Anticipos, Abonos y Cobranza</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Registro de transferencias interbancarias SPEI, pasarelas y abonos por avance de desarrollo.
                    </p>
                  </div>
                  <button
                    onClick={() => setPaymentModalOpen(true)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all shrink-0"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Registrar Nuevo Pago</span>
                  </button>
                </div>

                {loadingBilling ? (
                  <div className="py-16 text-center text-slate-400 text-sm">Cargando pagos desde Laravel...</div>
                ) : paymentsList.length === 0 ? (
                  <div className="py-16 text-center text-slate-500 text-sm">No hay registros de pago activos.</div>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {paymentsList.map(pay => (
                      <div 
                        key={pay.id}
                        className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold">
                              {pay.payment_reference}
                            </span>
                            <span className="font-bold text-white text-sm">{pay.concept}</span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
                              {pay.payment_type}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-1">
                            <span>Cliente: <strong className="text-slate-200">{pay.client_name}</strong></span>
                            <span>Método: <strong className="text-emerald-300">{pay.payment_method}</strong></span>
                            <span>Fecha: <strong className="text-slate-300">{new Date(pay.payment_date).toLocaleDateString()}</strong></span>
                            {pay.proof_url && <span>Referencia: <code className="text-slate-300">{pay.proof_url}</code></span>}
                          </div>
                          {pay.notes && <p className="text-xs text-slate-400 mt-2 bg-slate-950/40 p-2 rounded-lg">{pay.notes}</p>}
                        </div>

                        <div className="text-right sm:shrink-0">
                          <div className="text-xl font-black text-emerald-400">
                            +${Number(pay.amount).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 uppercase">
                            {pay.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB: FACTURACIÓN CFDI 4.0 */}
            {activePortalTab === 'licenses' && (
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Key className="w-5 h-5 text-rose-400" />
                      <span>Control Maestro de Licencias & Abonos SaaS</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Control remoto de paywalls, vencimiento de abonos, prórrogas y monitoreo de telemetría de sistemas clientes en tiempo real.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={fetchLicenses}
                      disabled={loadingLicenses}
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all border border-white/5"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${loadingLicenses ? 'animate-spin' : ''}`} />
                      <span>Refrescar</span>
                    </button>
                    <button
                      onClick={openNewLicenseModal}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-500/25 transition-all"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Nueva Licencia SaaS</span>
                    </button>
                  </div>
                </div>

                {/* Métricas específicas del módulo SaaS */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 text-center">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase">Total Softwares</div>
                    <div className="text-xl font-black text-white mt-1">{licenseMetrics.total || 0}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-emerald-500/20 text-center">
                    <div className="text-[11px] text-emerald-400 font-semibold uppercase">Activos en Regla</div>
                    <div className="text-xl font-black text-emerald-400 mt-1">{licenseMetrics.active || 0}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-rose-500/20 text-center">
                    <div className="text-[11px] text-rose-400 font-semibold uppercase">Suspendidos</div>
                    <div className="text-xl font-black text-rose-400 mt-1">{licenseMetrics.blocked || 0}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-amber-500/20 text-center">
                    <div className="text-[11px] text-amber-400 font-semibold uppercase">Por Vencer (≤7d)</div>
                    <div className="text-xl font-black text-amber-400 mt-1">{licenseMetrics.expiring_soon || 0}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-sky-500/20 text-center col-span-2 sm:col-span-1">
                    <div className="text-[11px] text-sky-400 font-semibold uppercase">MRR Recurrente</div>
                    <div className="text-base sm:text-lg font-black text-sky-300 mt-1">
                      ${Number(licenseMetrics.total_mrr || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                </div>

                {/* Barra de Búsqueda y Filtros de Licencias */}
                <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
                  <div className="relative w-full md:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Buscar por cliente, slug o URL..."
                      value={licenseSearch}
                      onChange={(e) => setLicenseSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                    <button
                      onClick={() => setLicenseFilter('todos')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        licenseFilter === 'todos'
                          ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                          : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Todos ({licensesList.length})
                    </button>
                    <button
                      onClick={() => setLicenseFilter('activos')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        licenseFilter === 'activos'
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                          : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Operativos ({licenseMetrics.active || 0})
                    </button>
                    <button
                      onClick={() => setLicenseFilter('bloqueados')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        licenseFilter === 'bloqueados'
                          ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                          : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Suspendidos ({licenseMetrics.blocked || 0})
                    </button>
                    <button
                      onClick={() => setLicenseFilter('vencidos')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        licenseFilter === 'vencidos'
                          ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                          : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Por Vencer ({licenseMetrics.expiring_soon || 0})
                    </button>
                  </div>
                </div>

                {/* Listado de Sistemas SaaS */}
                {loadingLicenses ? (
                  <div className="py-20 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-rose-400" />
                    <span>Cargando licencias y telemetría de sistemas...</span>
                  </div>
                ) : licensesList.length === 0 ? (
                  <div className="py-20 text-center rounded-2xl bg-slate-900/40 border border-white/5 p-8">
                    <ShieldAlert className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                    <h5 className="text-white font-bold">No hay softwares SaaS registrados aún</h5>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      Registra el primer sistema para generar su endpoint JSON y protegerlo contra adeudos o vencimientos.
                    </p>
                    <button
                      onClick={openNewLicenseModal}
                      className="mt-4 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all shadow-lg shadow-rose-500/20"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Registrar Primer Software</span>
                    </button>
                  </div>
                ) : filteredLicenses.length === 0 ? (
                  <div className="py-16 text-center rounded-2xl bg-slate-900/30 border border-white/5 p-6">
                    <Search className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                    <h6 className="text-slate-300 font-semibold text-sm">No se encontraron licencias con los filtros aplicados</h6>
                    <p className="text-xs text-slate-500 mt-1">Prueba con otro término de búsqueda o selecciona "Todos".</p>
                    <button
                      onClick={() => { setLicenseSearch(''); setLicenseFilter('todos'); }}
                      className="mt-3 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium hover:text-white"
                    >
                      Restablecer Filtros
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {filteredLicenses.map((lic) => {
                      const isBlocked = lic.blocked;
                      const isOverdue = lic.esta_vencido;
                      const days = lic.dias_restantes;

                      return (
                        <div
                          key={lic.id}
                          className={`p-5 rounded-2xl border transition-all ${
                            isBlocked
                              ? 'bg-rose-950/20 border-rose-500/40 shadow-lg shadow-rose-950/30'
                              : isOverdue
                              ? 'bg-amber-950/20 border-amber-500/40'
                              : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                            {/* Datos Principales */}
                            <div className="flex-1 space-y-2.5">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-extrabold text-white text-base">
                                  {lic.client_name}
                                </span>
                                <span className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-white/10 text-slate-300 font-mono text-xs">
                                  {lic.system_slug}
                                </span>

                                {/* Badge de Estado */}
                                {isBlocked ? (
                                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                                    <ShieldAlert className="w-3 h-3" />
                                    <span>Acceso Suspendido (Paywall Activo)</span>
                                  </span>
                                ) : isOverdue ? (
                                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>Vencido ({Math.abs(days)} días)</span>
                                  </span>
                                ) : (
                                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                                    <ShieldCheck className="w-3 h-3" />
                                    <span>Operativo ({days !== null ? (days === 1 ? '1 día restante' : `${days} días restantes`) : 'Indefinido'})</span>
                                  </span>
                                )}
                              </div>

                              {/* Parámetros Técnicos y Financieros */}
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                                <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Abono Mensual</span>
                                  <strong className="text-emerald-400 font-bold text-sm">
                                    ${Number(lic.monthly_amount).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                                  </strong>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Fecha de Corte</span>
                                  <strong className="text-slate-200 font-bold">
                                    {lic.cutoff_date ? new Date(lic.cutoff_date + 'T00:00:00').toLocaleDateString('es-MX') : 'Sin corte'}
                                  </strong>
                                  <span className="text-[10px] text-slate-500 ml-1">({lic.grace_days}d gracia)</span>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                                  <span className="text-[10px] text-slate-400 block uppercase font-medium">PIN Emergencia</span>
                                  <strong className="text-amber-300 font-mono tracking-wider font-bold">
                                    {lic.extension_code || 'N/A'}
                                  </strong>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                                  <span className="text-[10px] text-slate-400 block uppercase font-medium flex items-center gap-1">
                                    <Activity className="w-3 h-3 text-emerald-400" />
                                    <span>Último Ping</span>
                                  </span>
                                  <strong className="text-slate-300 font-medium text-[11px]">
                                    {lic.last_ping_at}
                                  </strong>
                                </div>
                              </div>

                              {/* URL del Endpoint JSON & URL del Sistema */}
                              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-white/10 font-mono text-[11px] text-slate-300">
                                  <span className="text-slate-500">API:</span>
                                  <span>{lic.json_url}</span>
                                  <button
                                    onClick={() => copyToClipboard(lic.json_url, lic.system_slug)}
                                    title="Copiar URL"
                                    className="ml-1 text-slate-400 hover:text-white transition-colors"
                                  >
                                    {copiedSlug === lic.system_slug ? (
                                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                      <Copy className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                </div>

                                {lic.system_url && (
                                  <a
                                    href={lic.system_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 text-[11px] transition-colors"
                                  >
                                    <Laptop className="w-3 h-3" />
                                    <span>Abrir Sistema</span>
                                    <ExternalLink className="w-2.5 h-2.5" />
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Botones de Control Remoto */}
                            <div className="flex flex-wrap lg:flex-col items-stretch justify-end gap-2 lg:min-w-[180px] shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/5">
                              {/* Botón de Suspender / Reactivar Inmediato */}
                              <button
                                onClick={() => handleToggleBlocked(lic.id)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                                  isBlocked
                                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                                    : 'bg-rose-600/80 hover:bg-rose-600 text-white shadow-lg shadow-rose-600/20'
                                }`}
                              >
                                <Power className="w-3.5 h-3.5" />
                                <span>{isBlocked ? 'Reactivar Acceso' : 'Suspender Acceso'}</span>
                              </button>

                              {/* Botón de Extender +30 Días */}
                              <button
                                onClick={() => handleExtendLicense(lic.id, 30)}
                                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/20 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                              >
                                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                                <span>+30 Días (Abono)</span>
                              </button>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => openEditLicenseModal(lic)}
                                  className="flex-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center gap-1 transition-colors"
                                >
                                  <Edit3 className="w-3 h-3" />
                                  <span>Editar</span>
                                </button>
                                <button
                                  onClick={() => handleDeleteLicense(lic.id, lic.client_name)}
                                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 text-xs transition-colors"
                                  title="Eliminar registro"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* MODAL PARA REGISTRAR PAGO / ANTICIPO / ABONO */}
      {paymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0b1021] border border-white/10 p-6 shadow-2xl">
            <button
              onClick={() => setPaymentModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span>Registrar Pago, Anticipo o Abono</span>
            </h4>

            <form onSubmit={handleCreatePayment} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Cliente / Organización *</label>
                <input
                  type="text"
                  required
                  value={newPayment.client_name}
                  onChange={(e) => setNewPayment({...newPayment, client_name: e.target.value})}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="Ej. Universidad Interamericana del Bravo"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Concepto del Pago *</label>
                <input
                  type="text"
                  required
                  value={newPayment.concept}
                  onChange={(e) => setNewPayment({...newPayment, concept: e.target.value})}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="Ej. Anticipo del 40% - Arranque de Desarrollo"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Tipo de Pago *</label>
                  <select
                    value={newPayment.payment_type}
                    onChange={(e) => setNewPayment({...newPayment, payment_type: e.target.value})}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="anticipo">Anticipo</option>
                    <option value="abono">Abono</option>
                    <option value="liquidacion">Liquidación</option>
                    <option value="mantenimiento">Mantenimiento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Monto (MXN) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={newPayment.amount}
                    onChange={(e) => setNewPayment({...newPayment, amount: e.target.value})}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-emerald-400 font-bold focus:outline-none focus:border-emerald-500"
                    placeholder="34104.00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Método de Pago</label>
                  <select
                    value={newPayment.payment_method}
                    onChange={(e) => setNewPayment({...newPayment, payment_method: e.target.value})}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="SPEI">SPEI (Transferencia)</option>
                    <option value="Stripe">Stripe / Tarjeta</option>
                    <option value="Mercado Pago">Mercado Pago</option>
                    <option value="Cheque">Cheque</option>
                    <option value="Efectivo">Efectivo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Fecha de Pago</label>
                  <input
                    type="date"
                    required
                    value={newPayment.payment_date}
                    onChange={(e) => setNewPayment({...newPayment, payment_date: e.target.value})}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Referencia o Clave de Rastreo</label>
                <input
                  type="text"
                  value={newPayment.proof_url}
                  onChange={(e) => setNewPayment({...newPayment, proof_url: e.target.value})}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="Ej. SPEI-BBVA-984210375"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-500/20"
                >
                  Confirmar y Guardar Pago
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PARA EMITIR FACTURA CFDI 4.0 */}
      {invoiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0b1021] border border-white/10 p-6 shadow-2xl">
            <button
              onClick={() => setInvoiceModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Receipt className="w-5 h-5 text-indigo-400" />
              <span>Emitir Factura Fiscal CFDI 4.0</span>
            </h4>

            <form onSubmit={handleCreateInvoice} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Razón Social del Receptor *</label>
                <input
                  type="text"
                  required
                  value={newInvoice.razon_social_receptor}
                  onChange={(e) => setNewInvoice({...newInvoice, razon_social_receptor: e.target.value})}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="Ej. UNIVERSIDAD INTERAMERICANA DEL BRAVO A.C."
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">RFC Receptor *</label>
                  <input
                    type="text"
                    required
                    value={newInvoice.rfc_receptor}
                    onChange={(e) => setNewInvoice({...newInvoice, rfc_receptor: e.target.value.toUpperCase()})}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white uppercase focus:outline-none focus:border-indigo-500"
                    placeholder="UIB980312KP4"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Código Postal Fiscal *</label>
                  <input
                    type="text"
                    required
                    value={newInvoice.codigo_postal_receptor}
                    onChange={(e) => setNewInvoice({...newInvoice, codigo_postal_receptor: e.target.value})}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                    placeholder="88620"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Uso de CFDI</label>
                <select
                  value={newInvoice.uso_cfdi}
                  onChange={(e) => setNewInvoice({...newInvoice, uso_cfdi: e.target.value})}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="G03 - Gastos en general">G03 - Gastos en general</option>
                  <option value="I08 - Otra maquinaria y equipo">I08 - Otra maquinaria y equipo</option>
                  <option value="CP01 - Pagos">CP01 - Pagos</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Subtotal (MXN) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={newInvoice.subtotal}
                    onChange={(e) => {
                      const sub = parseFloat(e.target.value) || 0;
                      setNewInvoice({
                        ...newInvoice,
                        subtotal: e.target.value,
                        iva: (sub * 0.16).toFixed(2),
                        total: (sub * 1.16).toFixed(2)
                      });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                    placeholder="29400.00"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Total con IVA 16%</label>
                  <div className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-indigo-400 font-bold">
                    ${Number(newInvoice.total || 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setInvoiceModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/20"
                >
                  Timbrar y Emitir CFDI 4.0
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PARA CREAR O EDITAR LICENCIA SAAS */}
      {licenseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0b1021] border border-white/10 p-6 shadow-2xl my-8">
            <button
              onClick={() => setLicenseModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Key className="w-5 h-5 text-rose-400" />
              <span>{editingLicense ? 'Editar Licencia y Parámetros SaaS' : 'Registrar Nuevo Software SaaS'}</span>
            </h4>
            <p className="text-xs text-slate-400 mb-5">
              Configura los límites de facturación, fecha de corte, días de gracia y credenciales de soporte para el sistema cliente.
            </p>

            <form onSubmit={handleSaveLicense} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Nombre del Cliente / Entidad *</label>
                  <input
                    type="text"
                    required
                    value={licenseFormData.client_name}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, client_name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-rose-500"
                    placeholder="Ej. Universidad Interamericana del Bravo"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Slug Identificador del Sistema *</label>
                  <input
                    type="text"
                    required
                    value={licenseFormData.system_slug}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, system_slug: e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, '') })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 font-mono text-rose-300 focus:outline-none focus:border-rose-500"
                    placeholder="sistemaacademicounib"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Endpoint: /licenses/{licenseFormData.system_slug || 'slug'}.json</span>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">URL Base del Sistema Cliente</label>
                <input
                  type="text"
                  value={licenseFormData.system_url}
                  onChange={(e) => setLicenseFormData({ ...licenseFormData, system_url: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-rose-500"
                  placeholder="https://universidad.sistemaacademicounib.test"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Monto Mensual / Abono *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={licenseFormData.monthly_amount}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, monthly_amount: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-emerald-400 font-bold focus:outline-none focus:border-rose-500"
                    placeholder="3500.00"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Fecha de Corte</label>
                  <input
                    type="date"
                    value={licenseFormData.cutoff_date || ''}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, cutoff_date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Días de Gracia</label>
                  <input
                    type="number"
                    min="0"
                    max="60"
                    value={licenseFormData.grace_days}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, grace_days: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">PIN / Código de Prórroga</label>
                  <input
                    type="text"
                    value={licenseFormData.extension_code}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, extension_code: e.target.value.toUpperCase() })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 font-mono text-amber-300 font-bold focus:outline-none focus:border-rose-500"
                    placeholder="CRUZSOFT2026"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">WhatsApp Soporte</label>
                  <input
                    type="text"
                    value={licenseFormData.contact_whatsapp}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, contact_whatsapp: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-rose-500"
                    placeholder="528781135411"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Email Soporte</label>
                  <input
                    type="email"
                    value={licenseFormData.contact_email}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, contact_email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-rose-500"
                    placeholder="contacto@cruzsoftlabs.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Mensaje de Alerta en Paywall</label>
                <textarea
                  rows="2"
                  value={licenseFormData.alert_message}
                  onChange={(e) => setLicenseFormData({ ...licenseFormData, alert_message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-rose-500 resize-none"
                  placeholder="Mensaje mostrado al usuario cuando el servicio está suspendido o vencido..."
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Notas Internas / Acuerdos</label>
                <textarea
                  rows="2"
                  value={licenseFormData.notes}
                  onChange={(e) => setLicenseFormData({ ...licenseFormData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-slate-300 focus:outline-none focus:border-rose-500 resize-none"
                  placeholder="Ej. Abono acordado el día 5 de cada mes. Contactar a rectoría si se suspende."
                />
              </div>

              {/* Toggles de Estado */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-white/5 flex flex-wrap items-center justify-between gap-4">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={licenseFormData.active}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, active: e.target.checked })}
                    className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="font-semibold text-white">Software Activo</span>
                    <span className="block text-[11px] text-slate-500">Habilita las respuestas del endpoint JSON</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={licenseFormData.blocked}
                    onChange={(e) => setLicenseFormData({ ...licenseFormData, blocked: e.target.checked })}
                    className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="font-semibold text-rose-400">Bloqueo Forzado (Suspender)</span>
                    <span className="block text-[11px] text-slate-500">Muestra la pantalla de paywall de inmediato</span>
                  </div>
                </label>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setLicenseModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold transition-all shadow-lg shadow-rose-500/25"
                >
                  {editingLicense ? 'Actualizar Licencia' : 'Guardar y Activar Licencia'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
