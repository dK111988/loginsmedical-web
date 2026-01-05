// --- 1. Import Images (ต้องปรับ Path ให้ถูกต้องตามโครงสร้างจริงของคุณโอธ) ---
import limage1 from '../images/Loginslab.png';
import limage2 from '../images/bacteria.png';
import limage3 from '../images/central.png';
import limage4 from '../images/blood.png';
import limage5 from '../images/pcu.png';
import limage6 from '../images/outlab.png';
import limage7 from '../images/queue.png';
import limage8 from '../images/edoc.png';
import limage9 from '../images/risk.png';
import limage10 from '../images/healthConnect.png';
import limage11 from '../images/qc.png';
import limage12 from '../images/invplus.png';

// --- 2. Import Product Detail Components (Components ที่ใช้ใน Modal) ---
import LoginsLab from '../components/ProductsDetail/LoginsLab';
import LoginsBacteria from '../components/ProductsDetail/LoginsBacteria';
import LoginsCentralLab from '../components/ProductsDetail/LoginsCentralLab';
import LoginsBright from '../components/ProductsDetail/LoginsBright';
import LoginsPCU from '../components/ProductsDetail/LoginsPCU';
import LoginsOutlab from '../components/ProductsDetail/LoginsOutlab';
import LoginsRisk from '../components/ProductsDetail/LoginsRisk';
import HealthConnect from '../components/ProductsDetail/HealthConnect';
import LoginsQC from '../components/ProductsDetail/LoginsQC';
import LoginsQueue from '../components/ProductsDetail/LoginsQueue';
import LoginseDoc from '../components/ProductsDetail/LoginseDoc';
import LoginsInv from '../components/ProductsDetail/LoginsInv';


// --- 3. Product Data Array (ข้อมูลผลิตภัณฑ์หลัก) ---
export const productList = [
    {
        id: 'logins-lab',
        image: limage1,
        title: 'LogInS LAB',
        // คำอธิบายสั้น (ใช้ใน OurProduct.js Card)
        description: 'ระบบจัดการและบริหารห้องปฎิบัติการงานพยาธิสำหรับ "โรงพยาบาล" ขนาดเล็กและขนาดใหญ่ สามารถรองรับการทำงานได้ทุกรูปแบบของห้องปฎิบัติการ และมีความยืดหยุ่นสูงต่อผู้ใช้งาน',
        component: LoginsLab,
        // คำอธิบายเต็ม (ใช้ใน Feature.js หรือใน Modal Detail)
        fullDescription: 'ระบบ LogInS LAB เป็นหัวใจสำคัญในการบริหารจัดการข้อมูลการตรวจวิเคราะห์ทางห้องปฏิบัติการทุกแผนก ตั้งแต่การลงทะเบียนสิ่งส่งตรวจ (LIS) การจัดการเครื่องมือ (Interface) การควบคุมคุณภาพ (QC/QA) และการรายงานผลที่รวดเร็วและแม่นยำ',
    },
    {
        id: 'logins-bacteria',
        image: limage2,
        title: 'LogInS Bacteria',
        description: 'ระบบบริหารจัดการงานจุลชีววิทยา การตรวจรับสิ่งส่งตรวจ การลงผล Preliminary Report, Additional Report, Final Report การลงข้อมูล Organism & Sensitivity',
        component: LoginsBacteria,
        // **ส่วนนี้ที่ Feature.js ดึงไปใช้ในส่วน Highlight**
        fullDescription: 'ระบบงานพยาธิวิทยา ระบบจัดการการลงทะเบียน ตรวจรับสิ่งส่งตรวจด้วย Barcode, Runing Number, และการรายงานผลเบื้องต้นและขั้นสุดท้าย (Preliminary/Final Report) ระบบ LogInS BACTERIA มีจุดเด่นด้านการจัดการ Organism Isolate, MDR, Sensitivity Test และการอัปเดต CLSI เพื่อประสิทธิภาพสูงสุดในการวินิจฉัยและควบคุมเชื้อดื้อยา',
    },
    {
        id: 'logins-central-lab',
        image: limage3,
        title: 'LogInS Central LAB',
        description: 'ระบบจัดการและบริหารห้องปฎิบัติการงานพยาธิสำหรับ "ศูนย์แล็ป" ขนาดเล็กและขนาดใหญ่ สามารถรองรับการทำงานได้ทุกรูปแบบและมีความยืดหยุ่นสูงต่อผู้ใช้งาน รวมระบบงานเกี่ยวข้องไว้ครบครัน',
        component: LoginsCentralLab,
        fullDescription: 'ถูกออกแบบมาเพื่อรองรับการทำงานของศูนย์ปฏิบัติการขนาดใหญ่หรือเครือข่ายที่มีหลายสาขา สามารถบริหารจัดการการรับ-ส่งสิ่งส่งตรวจ การกระจายงาน และการออกรายงานผลรวมจากหลายแหล่งได้อย่างมีประสิทธิภาพและรวมศูนย์',
    },
    {
        id: 'logins-bright',
        image: limage4,
        title: 'LogInS Bright',
        description: 'ระบบบริหารคลังโลหิต เป็นระบบช่วยในการจัดการงานบริหารในส่วนการลงข้อมูล ผู้บริจาคโลหิต การจองโลหิต การเบิกโลหิต การจ่ายโลหิต ซึ่งง่ายต่อการตรวจสอบและการใช้งาน',
        component: LoginsBright,
        fullDescription: 'ระบบบริหารจัดการคลังโลหิต (Blood Bank) ที่ครอบคลุมตั้งแต่การรับบริจาค การตรวจคัดกรอง การจัดเก็บ การตรวจสอบความเข้ากันได้ (Crossmatch) และการจ่ายโลหิตออกจากคลัง เพื่อความปลอดภัยสูงสุดของผู้ป่วย',
    },
    {
        id: 'logins-pcu',
        image: limage5,
        title: 'LogInS PCU',
        description: 'ระบบ LogInS PCU ระบบที่จะช่วยอำนวยความสะดวกในการดูผลคนไข้อ Online ระหว่าง รพ. กับ รพ.สต. เพิ่่มความสะดวกและความถูกต้องของข้อมูล',
        component: LoginsPCU,
        fullDescription: 'ระบบเชื่อมต่อและอำนวยความสะดวกในการเข้าถึงผลการตรวจของผู้ป่วยแบบออนไลน์ระหว่างโรงพยาบาลและโรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต.) หรือหน่วยปฐมภูมิอื่นๆ เพื่อการติดตามผลและรักษาที่ต่อเนื่อง',
    },
    {
        id: 'logins-outlab',
        image: limage6,
        title: 'LogInS Out LAB',
        description: 'ระบบการดูผลการตรวจ Out LAB สามารถ Online และส่งผลตรวจผ่านระบบได้อย่างถูกต้องและแม่นยำซึ่งสามารถส่งผลในรูปแบบเอกสารหรือรูปภาพได้',
        component: LoginsOutlab,
        fullDescription: 'แพลตฟอร์มสำหรับห้องปฏิบัติการภายนอก (Outsource Lab) ในการส่งผลการตรวจกลับมายังโรงพยาบาลอย่างถูกต้อง แม่นยำ และรวดเร็ว รองรับการส่งผลในรูปแบบไฟล์ข้อมูลหรือภาพเอกสาร',
    },
    {
        id: 'logins-queue',
        image: limage7,
        title: 'LogInS Queue',
        description: 'LogInS Queue ระบบคิวสำหรับห้องปฏิบัติการ เป็นระบบที่มาช่วยในเรื่องการจัดลำดับการใช้บริการผู้ป่วยของห้องปฏิบัติการให้มีความสะดวกมากขึ้น',
        component: LoginsQueue,
        fullDescription: 'ระบบจัดการคิวอัตโนมัติสำหรับห้องปฏิบัติการ ช่วยลดความแออัด จัดลำดับการให้บริการของผู้ป่วยได้อย่างมีระเบียบ และเพิ่มความสะดวกสบายในการรอรับบริการ',
    },
    {
        id: 'logins-edoc',
        image: limage8,
        title: 'LogInS E-Doc',
        description: 'ระบบจัดเก็บและรวบรวมเอกสาร จัดหมวดหมู่ตามแบบตรวจประเมินระบบคุณภาพมาตรฐานงานเทคนิดการแพทย์ เรียกดู เพิ่ม แก้ไข และไฟล์เอกสารต่างๆ ได้',
        component: LoginseDoc,
        fullDescription: 'ระบบจัดเก็บเอกสารอิเล็กทรอนิกส์สำหรับงานเทคนิคการแพทย์โดยเฉพาะ ช่วยในการจัดหมวดหมู่เอกสารคุณภาพ การควบคุมเวอร์ชัน และการเข้าถึงเอกสารได้อย่างรวดเร็วและเป็นไปตามมาตรฐานคุณภาพ',
    },
    {
        id: 'logins-risk',
        image: limage9,
        title: 'LogInS Risk Management',
        description: 'ระบบการบันทึกการควบคุมสิ่งที่ไม่สอดคล้องกับข้อกำหนด การระบุหัวข้อความเสี่ยง เลขอุบัติการณ์ หรือขั้นตอนไปจนถึงการระบุโปรแกรมความเสี่ยง',
        component: LoginsRisk,
        fullDescription: 'เครื่องมือในการบริหารจัดการความเสี่ยง (Risk Management) และบันทึกสิ่งที่ไม่สอดคล้อง (Non-Conformity) ในกระบวนการทำงานของห้องปฏิบัติการ สามารถติดตามและประเมินความเสี่ยงได้อย่างเป็นระบบ',
    },
    {
        id: 'health-connect',
        image: limage10,
        title: 'LogInS Health Connect',
        description: 'ระบบปงานตรวจสถขภาพที่รองรับการเชื่อต่อกับระบบ HIS ของโรงพยาบาล สามารถใช้ง่ายร่วมกับระบบห้องปฎิบัติการส่วนของสิ่งส่งตรวจและการดูผลตรวจและการออกรายงาน',
        component: HealthConnect,
        fullDescription: 'ระบบเชื่อมต่อสำหรับงานตรวจสุขภาพ (Health Check-up) ที่สามารถทำงานร่วมกับระบบ HIS ของโรงพยาบาลได้อย่างราบรื่น เพื่ออำนวยความสะดวกในการลงทะเบียน การเก็บสิ่งส่งตรวจ และการออกรายงานผลตรวจสุขภาพโดยเฉพาะ',
    },
    {
        id: 'logins-qc',
        image: limage11,
        title: 'LogInS QC/ QC Online',
        description: 'เก็บรวบรวมข้อมูลคุณภาพของเครื่องตรวจวิเคราะห์แสดงกฎตาม Westgard Multirule และมีระบบคำนวณ Lab Mean กับ Lab SD สามารถลงข้อมูลผลและแปลผล IQC ได้',
        component: LoginsQC,
        fullDescription: 'ระบบควบคุมคุณภาพ (Quality Control) ภายในห้องปฏิบัติการ รองรับการแสดงผลตามกฎ Westgard Multirule และคำนวณค่า Lab Mean/SD เพื่อให้มั่นใจว่าผลการตรวจวิเคราะห์มีความน่าเชื่อถือ',
    },
    {
        id: 'logins-inv',
        image: limage12,
        title: 'LogInS Inv', 
        description: 'ระบบควบคุมจัดการวัสดุคงคลังและครุภัณฑ์ในห้องปฏิบัติการและศูนย์แล็ป',
        component: LoginsInv,
        fullDescription: 'ระบบบริหารจัดการวัสดุคงคลังและครุภัณฑ์ (Inventory) สำหรับห้องปฏิบัติการโดยเฉพาะ ช่วยในการควบคุมจำนวน การเบิกจ่าย และการแจ้งเตือนเมื่อวัสดุใกล้หมดอายุหรือใกล้ถึงจุดสั่งซื้อใหม่',
    },
];


// --- 4. Export Function (สำหรับให้ Feature.js ดึงข้อมูลเฉพาะตัว) ---
export const getProductById = (id) => {
    return productList.find(product => product.id === id);
};