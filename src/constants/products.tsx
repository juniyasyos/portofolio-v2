import siimut1 from "public/images/siimut/dashboard/dashboard-admin.png";
import siimut2 from "public/images/siimut/dashboard/dashboard-pic.png";
import siimut3 from "public/images/siimut/dashboard/dashboard-tim-mutu.png";
import siimut4 from "public/images/siimut/daily-reports/form.png";
import siimut5 from "public/images/siimut/daily-reports/laporan-harian-create.png";
import siimut6 from "public/images/siimut/daily-reports/lapora-harian.png";
import siimut7 from "public/images/siimut/report/laporan-triwulan.png";
import auth1 from "public/images/auth-server/auth1.png";
import auth2 from "public/images/auth-server/auth2.png";
import auth3 from "public/images/auth-server/auth3.png";
import auth4 from "public/images/auth-server/auth4.png";
import ikp1 from "public/images/ikp/ikp1.png";
import ikp2 from "public/images/ikp/ikp2.png";
import ikp3 from "public/images/ikp/ikp3.png";
import ikp4 from "public/images/ikp/ikp4.png";
import ikp5 from "public/images/ikp/ikp5.png";
import ikp6 from "public/images/ikp/ikp6.png";
import ikp7 from "public/images/ikp/ikp7.png";
import ikp8 from "public/images/ikp/ikp8.png";
import ikp9 from "public/images/ikp/ikp9.png";
import ikp10 from "public/images/ikp/ikp10.png";

export const products = [
  {
    href: "#",
    title: "SIIMUT",
    description:
      "Platform manajemen indikator mutu rumah sakit yang mengotomatiskan pencatatan, pelaporan, dan analisis berbasis standar KARS & SNARS.",
    thumbnail: siimut1,
    images: [siimut1, siimut2, siimut3, siimut4, siimut5, siimut6, siimut7],
    stack: ["Laravel", "Filament v3", "Livewire"],
    slug: "siimut",
    content: (
      <div className="space-y-6">

        {/* Overview */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Overview</h3>
          <p>
            SIIMUT membantu rumah sakit beralih dari pencatatan laporan mutu manual ke sistem digital
            terintegrasi untuk pengelolaan indikator mutu. Dengan pendekatan real-time laporan harian
            dan berbasis data, sistem ini memungkinkan monitoring yang lebih akurat,
            cepat, dan siap audit.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Key Features</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>📊 Real-time dashboard monitoring indikator mutu</li>
            <li>📝 Form builder dinamis (mirip Google Form, versioning support)</li>
            <li>⚡ Live reporting tanpa refresh (Livewire)</li>
            <li>📈 Benchmarking antar periode & unit kerja</li>
            <li>📂 Audit log & tracking perubahan data</li>
            <li>📄 Export laporan (PDF / Excel)</li>
            <li>📱 PWA support (offline-ready)</li>
            <li>🔐 Role-based access control (RBAC)</li>
          </ul>
        </div>

        {/* What Problems It Solves */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Problems Solved</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mengurangi pencatatan manual yang rawan error</li>
            <li>Menyatukan data indikator yang sebelumnya tersebar</li>
            <li>Mempercepat proses pelaporan dan rekap data</li>
            <li>Meningkatkan kesiapan akreditasi (KARS & SNARS)</li>
            <li>Mengurangi beban administratif tim mutu</li>
          </ul>
        </div>

        {/* Impact */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Impact</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keputusan manajemen lebih cepat berbasis data</li>
            <li>Peningkatan konsistensi dan akurasi laporan</li>
            <li>Efisiensi operasional tim mutu & unit kerja</li>
            <li>Monitoring performa layanan secara transparan</li>
          </ul>
        </div>

        {/* Concept */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Concept</h3>
          <p>
            SIIMUT dibangun dengan pendekatan modular dan reactive system,
            menggabungkan kekuatan Laravel sebagai backend dengan Filament
            untuk admin panel dan Livewire untuk interaktivitas tanpa kompleksitas frontend modern.
          </p>
        </div>

      </div>
    ),
  },
  {
    href: "#",
    title: "SP-IKP",
    description:
      "Sistem pelaporan insiden keselamatan pasien yang membantu pencatatan, investigasi, dan evaluasi insiden secara terstruktur dan siap audit.",
    thumbnail: ikp1,
    images: [ikp1, ikp2, ikp3, ikp4, ikp5, ikp6, ikp7, ikp8, ikp9, ikp10],
    stack: ["Laravel", "Filament v4", "Livewire"],
    slug: "sp-ikp",
    content: (
      <div className="space-y-6">

        {/* Overview */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Overview</h3>
          <p>
            SP-IKP membantu rumah sakit dalam mengelola laporan insiden keselamatan pasien
            secara terpusat dan terdokumentasi dengan baik. Setiap kejadian tidak hanya dicatat,
            tetapi juga dianalisis untuk memastikan adanya tindak lanjut yang jelas dan terukur.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Key Features</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>📝 Pelaporan insiden terstruktur (KTD, KNC, KPC, dll)</li>
            <li>🔍 Investigasi & analisis penyebab insiden</li>
            <li>📊 Dashboard monitoring kejadian</li>
            <li>📂 Riwayat laporan & tracking tindak lanjut</li>
            <li>📄 Export laporan (PDF / Excel)</li>
            <li>🔐 Role-based access control (RBAC)</li>
            <li>⚡ Input dan update data tanpa reload (Livewire)</li>
          </ul>
        </div>

        {/* Problems Solved */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Problems Solved</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pencatatan insiden yang sebelumnya tidak terstandarisasi</li>
            <li>Kesulitan tracking tindak lanjut dari setiap kejadian</li>
            <li>Data insiden tersebar dan sulit dianalisis</li>
            <li>Keterlambatan pelaporan dan evaluasi</li>
          </ul>
        </div>

        {/* Impact */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Impact</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pelaporan insiden menjadi lebih konsisten dan terdokumentasi</li>
            <li>Proses investigasi lebih terarah</li>
            <li>Peningkatan budaya keselamatan pasien</li>
            <li>Data lebih siap untuk kebutuhan audit dan akreditasi</li>
          </ul>
        </div>

        {/* Concept */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Concept</h3>
          <p>
            SP-IKP dibangun dengan pendekatan sistem terpusat dan berbasis alur kerja,
            memastikan setiap insiden memiliki lifecycle yang jelas mulai dari pelaporan,
            investigasi, hingga penyelesaian.
          </p>
        </div>

      </div>
    ),
  },
  {
    href: "https://github.com/juniyasyos/auth-server",
    title: "Auth Server",
    description:
      "Platform Identity & Access Management (IAM) berbasis JWT dengan Single Sign-On (SSO) untuk mengelola autentikasi dan kontrol akses secara terpusat di berbagai aplikasi.",
    thumbnail: auth1,
    images: [auth1, auth2, auth3, auth4],
    stack: ["Laravel", "JWT", "Filament v4", "Inertia.js"],
    slug: "auth-server",
    content: (
      <div className="space-y-6">

        {/* Overview */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Overview</h3>
          <p>
            Auth Server merupakan platform Identity & Access Management (IAM)
            berbasis JWT yang dirancang untuk mengelola autentikasi dan otorisasi
            secara terpusat dalam lingkungan multi-aplikasi. Dengan mekanisme
            Single Sign-On (SSO), pengguna cukup login sekali untuk mengakses
            berbagai sistem yang terintegrasi secara aman dan konsisten.
          </p>
        </div>

        {/* Value */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Why It Matters</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>🔑 Satu identitas untuk seluruh aplikasi (centralized identity)</li>
            <li>⚡ Integrasi aplikasi baru lebih cepat tanpa ulang sistem login</li>
            <li>🛡️ Kontrol akses terpusat dan mudah diaudit</li>
            <li>📉 Mengurangi kompleksitas manajemen user di banyak sistem</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Key Capabilities</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>🔐 Single Sign-On (SSO) berbasis JWT</li>
            <li>🎫 Access & refresh token dengan lifecycle management</li>
            <li>🔄 Token validation, introspection, dan revocation</li>
            <li>👥 Role-Based Access Control (RBAC) terpusat</li>
            <li>🏢 Manajemen struktur organisasi (unit kerja & jabatan)</li>
            <li>📡 Multi-application support (app key & redirect URI)</li>
            <li>📊 Admin panel untuk manajemen user & akses</li>
          </ul>
        </div>

        {/* Problems */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Problems Solved</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Multiple login di berbagai aplikasi yang tidak efisien</li>
            <li>Data user tidak sinkron antar sistem</li>
            <li>Role & permission tersebar dan sulit dikontrol</li>
            <li>Kesulitan dalam audit dan keamanan akses</li>
            <li>Integrasi aplikasi yang kompleks dan tidak scalable</li>
          </ul>
        </div>

        {/* Impact */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Business Impact</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>🚀 Akselerasi integrasi sistem dalam satu ekosistem</li>
            <li>🔐 Peningkatan keamanan melalui kontrol token terpusat</li>
            <li>📊 Visibilitas penuh terhadap aktivitas pengguna</li>
            <li>⚙️ Efisiensi operasional dalam pengelolaan akses</li>
          </ul>
        </div>

        {/* Concept */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Architecture Concept</h3>
          <p>
            Auth Server menggunakan pendekatan token-based authentication dengan JWT
            sebagai mekanisme utama untuk autentikasi dan otorisasi. Sistem ini
            bertindak sebagai central identity provider yang menghubungkan berbagai
            aplikasi dalam satu ekosistem, dengan kontrol akses yang konsisten, aman,
            dan mudah diintegrasikan.
          </p>
        </div>

      </div>
    ),
  },
];