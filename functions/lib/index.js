"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactRequests = exports.sendContactEmail = void 0;
const https_1 = require("firebase-functions/v2/https");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const nodemailer = __importStar(require("nodemailer"));
// Initialize Firebase Admin
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
// Email configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "infolexaar@gmail.com",
            pass: "hrez ufsk lroa ppub", // Gmail App Password
        },
    });
};
// Email template
const generateEmailHTML = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="ro">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouă cerere de ofertă - LexAar Bucătării</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                line-height: 1.6; 
                color: #2c3e50; 
                margin: 0; 
                padding: 40px 20px; 
                background-color: #f5f7fa;
                text-align: center;
            }
            .email-card {
                background: white;
                border-radius: 16px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.08);
                max-width: 400px;
                margin: 0 auto;
                overflow: hidden;
                border: 1px solid #e1e8ed;
            }
            .header { 
                background: linear-gradient(135deg, #6b7280, #9ca3af); 
                color: white; 
                padding: 24px 20px; 
                text-align: center;
            }
            .logo {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 4px;
                letter-spacing: 0.5px;
            }
            .header-subtitle {
                font-size: 11px;
                opacity: 0.85;
                margin: 0;
                font-weight: 400;
            }
            .content { 
                padding: 24px 20px;
            }
            .info-grid {
                display: grid;
                gap: 16px;
                margin-bottom: 20px;
            }
            .info-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid #f0f0f0;
                font-size: 14px;
            }
            .info-item:last-child {
                border-bottom: none;
            }
            .label { 
                font-weight: 600; 
                color: #6b7280;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 0.3px;
                min-width: 80px;
            }
            .value {
                color: #2c3e50;
                font-weight: 500;
                text-align: right;
                max-width: 180px;
                word-break: break-word;
            }
            .message-box {
                background: #f8f9fa;
                border-radius: 12px;
                padding: 16px;
                margin-bottom: 16px;
                border-left: 4px solid #6b7280;
            }
            .message-title {
                font-weight: 600;
                color: #6b7280;
                font-size: 12px;
                margin-bottom: 8px;
                text-transform: uppercase;
                letter-spacing: 0.3px;
            }
            .message-text {
                color: #34495e;
                font-size: 13px;
                margin: 0;
                line-height: 1.5;
            }
            .actions {
                background: linear-gradient(135deg, #e8f5e8, #f0f8f0);
                border-radius: 12px;
                padding: 16px;
                border: 1px solid #d4edda;
            }
            .actions-title {
                font-weight: 600;
                color: #155724;
                font-size: 12px;
                margin-bottom: 10px;
                text-transform: uppercase;
                letter-spacing: 0.3px;
            }
            .actions-list {
                margin: 0;
                padding: 0;
                list-style: none;
                font-size: 12px;
                color: #155724;
            }
            .actions-list li {
                margin-bottom: 6px;
                padding-left: 12px;
                position: relative;
            }
            .actions-list li:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #28a745;
                font-weight: bold;
            }
            .footer { 
                background: #f8f9fa;
                text-align: center; 
                padding: 16px 20px;
                border-top: 1px solid #e9ecef;
                font-size: 11px;
                color: #6c757d;
            }
            .footer-brand {
                font-weight: 600;
                color: #6b7280;
                margin-bottom: 4px;
                font-size: 12px;
            }
            .footer-text {
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <div class="email-card">
            <div class="header">
                <div class="logo">LexAar Bucătării</div>
                <p class="header-subtitle">Nouă cerere de ofertă</p>
            </div>
            
            <div class="content">
                <div class="info-grid">
                    <div class="info-item">
                        <span class="label">Nume</span>
                        <span class="value">${data.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Telefon</span>
                        <span class="value">${data.phone}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Email</span>
                        <span class="value">${data.email}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Data</span>
                        <span class="value">${new Date().toLocaleDateString("ro-RO", { timeZone: "Europe/Chisinau" })}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Timp</span>
                        <span class="value">${new Date().toLocaleTimeString("ro-RO", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Chisinau"
    })}</span>
                    </div>
                </div>
                
                <div class="message-box">
                    <div class="message-title">Mesaj</div>
                    <p class="message-text">${data.message ||
        "Cerere de ofertă pentru bucătării la comandă"}</p>
                </div>
                
                <div class="actions">
                    <div class="actions-title">Acțiuni recomandate</div>
                    <ul class="actions-list">
                        <li>Contactați clientul rapid</li>
                        <li>Programați vizită pentru măsurători</li>
                        <li>Pregătiți ofertă personalizată</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer">
                <div class="footer-brand">LexAar Bucătării</div>
                <div class="footer-text">Mobila la comandă în Moldova</div>
            </div>
        </div>
    </body>
    </html>
  `;
};
// Cloud Function for sending emails
exports.sendContactEmail = (0, https_1.onRequest)({ cors: true }, async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }
    try {
        const { name, phone, email, message } = req.body;
        // Validate required fields
        if (!name || !phone || !email) {
            res.status(400).json({
                error: "Missing required fields: name, phone, email",
            });
            return;
        }
        // Create transporter
        const transporter = createTransporter();
        // Email options
        const mailOptions = {
            from: "infolexaar@gmail.com",
            to: "infolexaar@gmail.com",
            subject: "Nouă cerere de ofertă - LexAar Bucătării",
            html: generateEmailHTML({ name, phone, email, message }),
            replyTo: email, // Client's email for easy reply
        };
        // Send email
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", result.messageId);
        // Log to Firebase for analytics
        await db.collection("contact_requests").add({
            name,
            phone,
            email,
            message: message || "Cerere de ofertă pentru bucătării la comandă",
            timestamp: new Date(),
            emailSent: true,
        });
        res.status(200).json({
            success: true,
            message: "Email sent successfully",
            messageId: result.messageId,
        });
    }
    catch (error) {
        console.error("Error sending email:", error);
        // Log error to Firebase
        await db.collection("contact_requests").add(Object.assign(Object.assign({}, req.body), { timestamp: new Date(), emailSent: false, error: error instanceof Error ? error.message : String(error) }));
        res.status(500).json({
            error: "Failed to send email",
            details: error instanceof Error ? error.message : String(error),
        });
    }
});
// Function to get contact requests (for admin panel)
exports.getContactRequests = (0, https_1.onRequest)({ cors: true }, async (req, res) => {
    try {
        const snapshot = await db
            .collection("contact_requests")
            .orderBy("timestamp", "desc")
            .limit(50)
            .get();
        const requests = snapshot.docs.map((doc) => {
            var _a;
            return (Object.assign(Object.assign({ id: doc.id }, doc.data()), { timestamp: (_a = doc.data().timestamp) === null || _a === void 0 ? void 0 : _a.toDate() }));
        });
        res.status(200).json({ requests });
    }
    catch (error) {
        console.error("Error getting contact requests:", error);
        res.status(500).json({
            error: "Failed to get contact requests",
            details: error instanceof Error ? error.message : String(error),
        });
    }
});
//# sourceMappingURL=index.js.map