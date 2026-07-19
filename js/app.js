/* ============ ICONS (multi-color, flat, theme-independent) ============ */
function icon(name, cls){
  cls = cls || 'icon';
  const M = {
    dashboard:'<rect x="3" y="3" width="7" height="9" rx="1.5" fill="#3b82f6"/><rect x="14" y="3" width="7" height="5" rx="1.5" fill="#f59e0b"/><rect x="14" y="12" width="7" height="9" rx="1.5" fill="#10b981"/><rect x="3" y="16" width="7" height="5" rx="1.5" fill="#a855f7"/>',
    quiz:'<circle cx="12" cy="12" r="9.5" fill="#8b5cf6"/><path d="M9.3 9.2a2.8 2.8 0 0 1 5.4.4c0 1.9-2.7 2.1-2.7 3.9" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1.1" fill="#fbbf24"/>',
    cards:'<path d="M7.5 6.2l10.2-2.8 3.8 11.3-4 1.1z" fill="#fb923c"/><rect x="3" y="7" width="14" height="10" rx="2" fill="#0ea5e9"/><rect x="6" y="10" width="8" height="1.6" rx="0.8" fill="#fff" opacity="0.85"/>',
    pbq:'<path d="M3 20h18" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/><rect x="5.5" y="12" width="3.4" height="7" rx="0.8" fill="#ef4444"/><rect x="10.3" y="7" width="3.4" height="12" rx="0.8" fill="#f59e0b"/><rect x="15.1" y="10" width="3.4" height="9" rx="0.8" fill="#10b981"/>',
    acronym:'<rect x="3" y="4.5" width="18" height="4" rx="1.5" fill="#3b82f6"/><rect x="3" y="10" width="12" height="4" rx="1.5" fill="#f59e0b"/><rect x="3" y="15.5" width="15" height="4" rx="1.5" fill="#10b981"/>',
    tips:'<path d="M12 2.5a6.2 6.2 0 0 0-3.8 11.1c.6.5.9 1.1.9 1.8v0.4h5.8v-.4c0-.7.3-1.3.9-1.8A6.2 6.2 0 0 0 12 2.5z" fill="#fbbf24"/><rect x="9" y="17.5" width="6" height="1.8" rx="0.6" fill="#94a3b8"/><rect x="9.6" y="20" width="4.8" height="1.6" rx="0.6" fill="#64748b"/>',
    settings:'<circle cx="12" cy="12" r="9.4" fill="#64748b"/><circle cx="12" cy="12" r="3.6" fill="#fff"/><circle cx="12" cy="12" r="2.1" fill="#3b82f6"/>',
    shield:'<path d="M12 2.5l7.5 3v6c0 5-3.2 8.6-7.5 9.5-4.3-.9-7.5-4.5-7.5-9.5v-6z" fill="#2563eb"/><path d="M8.4 12.2l2.4 2.4 4.8-4.9" stroke="#fff" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    warn:'<path d="M12 3.2L22.3 21H1.7z" fill="#f59e0b"/><rect x="11.1" y="9.5" width="1.8" height="5.4" rx="0.9" fill="#fff"/><circle cx="12" cy="17.6" r="1.1" fill="#fff"/>',
    lock:'<rect x="4.5" y="10.5" width="15" height="10" rx="2.2" fill="#dc2626"/><path d="M7.5 10.5V7.8a4.5 4.5 0 0 1 9 0v2.7" stroke="#3b82f6" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="12" cy="15.3" r="1.6" fill="#fbbf24"/>',
    data:'<ellipse cx="12" cy="5.2" rx="8" ry="2.8" fill="#3b82f6"/><path d="M4 5.2v13.6c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8V5.2" fill="#0ea5e9"/><path d="M4 11.5c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8" stroke="#fff" stroke-width="1.3" fill="none" opacity="0.6"/><ellipse cx="12" cy="5.2" rx="8" ry="2.8" fill="#60a5fa"/>',
    ops:'<rect x="1.5" y="15" width="21" height="6" rx="2" fill="#e2e8f0"/><path d="M2 12h4l2-7 4 14 2-7h7" stroke="#ef4444" stroke-width="2.1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    program:'<rect x="3" y="4" width="18" height="17" rx="2.2" fill="#7c3aed"/><rect x="8" y="2" width="8" height="4" rx="1.4" fill="#fbbf24"/><rect x="6" y="10" width="12" height="1.8" rx="0.9" fill="#fff"/><rect x="6" y="14" width="9" height="1.8" rx="0.9" fill="#fff" opacity="0.75"/>',
    check:'<circle cx="12" cy="12" r="9.5" fill="#16a34a"/><path d="M7 12.3l3.4 3.4 6.6-6.9" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    x:'<circle cx="12" cy="12" r="9.5" fill="#dc2626"/><path d="M8.2 8.2l7.6 7.6M15.8 8.2l-7.6 7.6" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>',
    flag:'<rect x="5" y="2.5" width="2" height="19" rx="1" fill="#64748b"/><path d="M7 4h11l-2.6 3.6L18 11.2H7z" fill="#ef4444"/>',
    book:'<path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 0-2 2z" fill="#3b82f6"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2z" fill="#f59e0b"/>',
    external:'<rect x="4" y="4" width="13" height="16" rx="2" fill="#e2e8f0"/><path d="M12 4h8v8" stroke="#3b82f6" stroke-width="2.1" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 4L10.5 13.5" stroke="#f59e0b" stroke-width="2.1" stroke-linecap="round"/>',
    refresh:'<path d="M20 11A8 8 0 0 0 6 6.3L3 9" stroke="#3b82f6" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 13a8 8 0 0 0 14 4.7L21 15" stroke="#10b981" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 4v5h5M21 20v-5h-5" stroke="#64748b" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  return '<svg class="'+cls+'" viewBox="0 0 24 24">'+(M[name]||M.shield)+'</svg>';
}
const NAV_LABELS = {dashboard:['dashboard','Dashboard'],quiz:['quiz','Practice Quiz'],flashcards:['cards','Flashcards'],pbq:['pbq','Performance-Based Qs'],acronyms:['acronym','Acronyms'],studytips:['tips','Study Tips'],settings:['settings','Settings']};
document.querySelectorAll('.nav-link[data-route]').forEach(a=>{
  const r=a.getAttribute('data-route'), [ic,label]=NAV_LABELS[r];
  a.innerHTML = icon(ic)+'<span>'+label+'</span>';
});

/* ============ DOMAIN / OBJECTIVE DATA ============ */
const DOMAINS = [
  {id:'1.0', title:'General Security Concepts', weight:12, icon:'shield', objectives:[
    {id:'1.1', title:'Compare and contrast types of security controls'},
    {id:'1.2', title:'Summarize fundamental security concepts'},
    {id:'1.3', title:'Change management processes and security impact'},
    {id:'1.4', title:'Appropriate cryptographic solutions'},
  ]},
  {id:'2.0', title:'Threats, Vulnerabilities, and Mitigations', weight:22, icon:'warn', objectives:[
    {id:'2.1', title:'Common threat actors and motivations'},
    {id:'2.2', title:'Common threat vectors and attack surfaces'},
    {id:'2.3', title:'Types of vulnerabilities'},
    {id:'2.4', title:'Analyze indicators of malicious activity'},
    {id:'2.5', title:'Mitigation techniques used to secure the enterprise'},
  ]},
  {id:'3.0', title:'Security Architecture', weight:18, icon:'lock', objectives:[
    {id:'3.1', title:'Security implications of architecture models'},
    {id:'3.2', title:'Apply security principles to enterprise infrastructure'},
    {id:'3.3', title:'Concepts and strategies to protect data'},
    {id:'3.4', title:'Resilience and recovery in security architecture'},
  ]},
  {id:'4.0', title:'Security Operations', weight:28, icon:'ops', objectives:[
    {id:'4.1', title:'Apply common security techniques to computing resources'},
    {id:'4.2', title:'Hardware, software, and data asset management'},
    {id:'4.3', title:'Activities associated with vulnerability management'},
    {id:'4.4', title:'Security alerting and monitoring concepts/tools'},
    {id:'4.5', title:'Modify enterprise capabilities to enhance security'},
    {id:'4.6', title:'Implement and maintain identity and access management'},
    {id:'4.7', title:'Automation and orchestration in secure operations'},
    {id:'4.8', title:'Appropriate incident response activities'},
    {id:'4.9', title:'Use data sources to support an investigation'},
  ]},
  {id:'5.0', title:'Security Program Management and Oversight', weight:20, icon:'program', objectives:[
    {id:'5.1', title:'Elements of effective security governance'},
    {id:'5.2', title:'Elements of the risk management process'},
    {id:'5.3', title:'Third-party risk assessment and management'},
    {id:'5.4', title:'Elements of effective security compliance'},
    {id:'5.5', title:'Types and purposes of audits and assessments'},
    {id:'5.6', title:'Implement security awareness practices'},
  ]},
];
const OBJ_INDEX = {}; DOMAINS.forEach(d=>d.objectives.forEach(o=>{o.domain=d.id; OBJ_INDEX[o.id]=o;}));

/* ============ QUESTION BANK ============ */
/* c = choices, a = index of correct answer, e = explanation */
const QBANK_CORE = [
// 1.1 Security controls
{obj:'1.1', q:'A security guard station and a fenced perimeter are examples of which category of control?', c:['Managerial','Technical','Physical','Operational'], a:2, e:'Physical controls are tangible, real-world measures such as guards, fences, locks, and lighting that restrict physical access.'},
{obj:'1.1', q:'Requiring an approved risk-acceptance policy before deploying new software is an example of which control category?', c:['Managerial','Technical','Physical','Compensating'], a:0, e:'Managerial controls are administrative in nature — policies, procedures, and governance decisions that guide security practices.'},
{obj:'1.1', q:'An organization cannot patch a legacy system, so it isolates it on a separate VLAN with strict firewall rules. This is an example of which control type?', c:['Preventive','Detective','Compensating','Corrective'], a:2, e:'A compensating control substitutes for a primary control that cannot be used, reducing risk by an alternate means.'},
{obj:'1.1', q:'Which control type is designed to identify and record that an incident has already occurred?', c:['Deterrent','Detective','Directive','Preventive'], a:1, e:'Detective controls (e.g., IDS, log review) identify and record security events after they occur.'},
// 1.2 Fundamental concepts
{obj:'1.2', q:'Which principle of the CIA triad ensures that data has not been altered by an unauthorized party?', c:['Confidentiality','Integrity','Availability','Non-repudiation'], a:1, e:'Integrity ensures data accuracy and consistency, typically verified through hashing and checksums.'},
{obj:'1.2', q:'In a Zero Trust architecture, the component that evaluates policy and grants or denies access decisions is the:', c:['Policy Enforcement Point','Policy Engine','Subject','Implicit trust zone'], a:1, e:'The Policy Engine evaluates trust algorithms/inputs and makes the access decision; the Policy Enforcement Point carries it out.'},
{obj:'1.2', q:'A fake file left on a share purely to detect unauthorized access is called a:', c:['Honeypot','Honeynet','Honeyfile','Honeytoken'], a:2, e:'A honeyfile is a decoy file designed to attract and detect attackers who open or exfiltrate it.'},
{obj:'1.2', q:'Which AAA element records what a user did after being authenticated and authorized?', c:['Authentication','Authorization','Accounting','Attestation'], a:2, e:'Accounting logs and tracks user activity, often used for auditing and billing.'},
// 1.3 Change management
{obj:'1.3', q:'Before implementing a major change, documenting how to revert the change if it fails is called a:', c:['Maintenance window','Backout plan','Impact analysis','Standard operating procedure'], a:1, e:'A backout plan defines the steps to reverse a change if it causes unexpected issues.'},
{obj:'1.3', q:'Which change management artifact defines who must approve a proposed change before implementation?', c:['Approval process','Version control','Test results','Ownership'], a:0, e:'The approval process specifies the stakeholders and workflow required to authorize a change.'},
{obj:'1.3', q:'Updating network diagrams and policy documents after a change is completed supports which goal?', c:['Downtime reduction','Accurate documentation','Legacy application support','Allow list enforcement'], a:1, e:'Keeping documentation current ensures accuracy for future audits, troubleshooting, and security reviews.'},
// 1.4 Cryptography
{obj:'1.4', q:'Which cryptographic solution uses a single shared key for both encryption and decryption?', c:['Asymmetric encryption','Symmetric encryption','Digital signature','Key escrow'], a:1, e:'Symmetric encryption uses one shared secret key for both encrypting and decrypting data, offering speed but key-distribution challenges.'},
{obj:'1.4', q:'Which technology can generate, store, and manage cryptographic keys within a dedicated, tamper-resistant hardware appliance?', c:['TPM','HSM','CSR','CRL'], a:1, e:'A Hardware Security Module (HSM) securely manages and protects cryptographic keys in dedicated hardware.'},
{obj:'1.4', q:'Adding random data to a password before hashing it to defeat rainbow table attacks is called:', c:['Salting','Key stretching','Tokenization','Obfuscation'], a:0, e:'Salting appends unique random data to each password before hashing, making precomputed rainbow tables ineffective.'},
{obj:'1.4', q:'Which PKI mechanism allows a client to check certificate revocation status in real time without downloading an entire list?', c:['CRL','OCSP','CSR','Root of trust'], a:1, e:'Online Certificate Status Protocol (OCSP) provides real-time revocation checks for individual certificates.'},
// 2.1 Threat actors
{obj:'2.1', q:'A threat actor with significant funding, advanced tools, and long-term strategic goals, often linked to a government, is best classified as a(n):', c:['Hacktivist','Unskilled attacker','Nation-state','Insider threat'], a:2, e:'Nation-state actors are typically well-funded, highly sophisticated, and pursue strategic/political objectives.'},
{obj:'2.1', q:'An employee who uses unauthorized cloud storage to get work done faster represents which concept?', c:['Shadow IT','Hacktivism','Organized crime','Insider threat with malicious intent'], a:0, e:'Shadow IT refers to technology used within an organization without explicit IT approval or oversight.'},
{obj:'2.1', q:'Which motivation best describes an attacker who defaces a website to promote a political cause?', c:['Financial gain','Espionage','Philosophical/political beliefs','Blackmail'], a:2, e:'Hacktivists are typically driven by philosophical or political beliefs rather than financial motives.'},
// 2.2 Threat vectors
{obj:'2.2', q:'An attacker registers "rnicrosoft.com" (using rn to look like m) hoping users will mistype the real domain. This is:', c:['Typosquatting','Watering hole','Pretexting','Vishing'], a:0, e:'Typosquatting relies on common misspellings or visually similar domains to lure victims to malicious sites.'},
{obj:'2.2', q:'An attacker compromises a website that a specific target organization frequently visits, waiting for employees to become infected. This attack is called a:', c:['Watering hole attack','Business email compromise','Smishing','Brand impersonation'], a:0, e:'A watering hole attack compromises a site the target audience is known to visit rather than attacking them directly.'},
{obj:'2.2', q:'Leaving unpatched RDP (port 3389) exposed to the internet is best categorized as which threat vector?', c:['Open service port','Removable device','Default credentials','Supply chain'], a:0, e:'Unnecessarily exposed open service ports create a direct entry point for attackers to exploit.'},
{obj:'2.2', q:'A compromise that occurs through a trusted managed service provider (MSP) with access to a client network is an example of a:', c:['Supply chain attack','Watering hole attack','Impersonation attack','Misconfiguration'], a:0, e:'Supply chain attacks exploit trusted third parties such as vendors, suppliers, or MSPs to reach the ultimate target.'},
// 2.3 Vulnerabilities
{obj:'2.3', q:'An attacker exploits the gap between when a file is checked for permissions and when it is actually used. This is a:', c:['Buffer overflow','Race condition (TOCTOU)','SQL injection','Memory injection'], a:1, e:'Time-of-check to time-of-use (TOCTOU) race conditions exploit the timing gap between validation and use of a resource.'},
{obj:'2.3', q:'Which vulnerability type is specific to attacks like SQL injection and cross-site scripting?', c:['OS-based','Web-based','Firmware','Cloud-specific'], a:1, e:'Web-based vulnerabilities such as SQLi and XSS target flaws in web application input handling.'},
{obj:'2.3', q:'A vulnerability that allows code running inside a virtual machine to interact with or affect the host system is called:', c:['VM escape','Resource reuse','Side loading','Jailbreaking'], a:0, e:'VM escape allows malicious code to break out of an isolated virtual machine and access the underlying hypervisor/host.'},
{obj:'2.3', q:'Installing an application on a mobile device from an unofficial source outside the approved app store is called:', c:['Jailbreaking','Side loading','Zero-day exploitation','Malicious update'], a:1, e:'Side loading involves installing apps outside the sanctioned app store, bypassing built-in vetting controls.'},
// 2.4 Indicators of malicious activity
{obj:'2.4', q:'A user account shows a successful login from New York and, four minutes later, a login from Singapore. This indicator is known as:', c:['Impossible travel','Concurrent session usage','Resource consumption','Account lockout'], a:0, e:'Impossible travel flags logins from geographically distant locations within a timeframe that is not physically feasible.'},
{obj:'2.4', q:'An attacker floods a target with traffic from many compromised systems simultaneously. This is a:', c:['On-path attack','Distributed denial-of-service attack','Credential replay','Downgrade attack'], a:1, e:'A DDoS attack uses multiple distributed sources (often a botnet) to overwhelm the target with traffic.'},
{obj:'2.4', q:'Which attack forces a cryptographic protocol to use an older, weaker version to make decryption easier?', c:['Downgrade attack','Collision attack','Birthday attack','Directory traversal'], a:0, e:'Downgrade attacks trick systems into negotiating a weaker, more exploitable version of a protocol or cipher.'},
{obj:'2.4', q:'An attacker captures a valid authentication token and resends it later to gain unauthorized access. This is:', c:['Credential replay','Privilege escalation','Forgery','Buffer overflow'], a:0, e:'Credential/session replay reuses captured valid credentials or tokens to impersonate a legitimate user.'},
// 2.5 Mitigation techniques
{obj:'2.5', q:'Restricting a user account to only the permissions strictly necessary for their job is an application of:', c:['Least privilege','Segmentation','Isolation','Patching'], a:0, e:'Least privilege limits access rights to the minimum necessary to perform required functions, reducing attack surface.'},
{obj:'2.5', q:'Dividing a network into isolated zones so a compromise in one zone cannot easily spread is called:', c:['Segmentation','Hardening','Decommissioning','Monitoring'], a:0, e:'Segmentation splits a network into smaller zones to contain the blast radius of a compromise.'},
{obj:'2.5', q:'Disabling unused ports and protocols, changing default passwords, and removing unnecessary software are all part of:', c:['Configuration enforcement','Hardening techniques','Application allow listing','Decommissioning'], a:1, e:'Hardening reduces the attack surface of a system by removing unneeded features and securing defaults.'},
// 3.1 Architecture models
{obj:'3.1', q:'In a cloud shared responsibility model for IaaS, who is typically responsible for securing the guest operating system?', c:['The cloud provider only','The customer','Neither party','A third-party auditor'], a:1, e:'In IaaS, the customer is responsible for OS-level security, patching, and configuration, while the provider secures the underlying infrastructure.'},
{obj:'3.1', q:'A network that is physically disconnected from all other networks to prevent unauthorized access is described as:', c:['Air-gapped','Logically segmented','SDN-based','Containerized'], a:0, e:'Air-gapped networks have no physical connectivity to other networks, offering strong isolation.'},
{obj:'3.1', q:'Which infrastructure concept defines and provisions resources using machine-readable definition files instead of manual configuration?', c:['Serverless computing','Infrastructure as Code','Microservices','High availability'], a:1, e:'Infrastructure as Code (IaC) uses versioned scripts/templates to consistently define and deploy infrastructure.'},
// 3.2 Secure infrastructure
{obj:'3.2', q:'A server placed between an internal network and an external network to filter and relay requests on behalf of clients is a:', c:['Jump server','Proxy server','Load balancer','Sensor'], a:1, e:'A proxy server intermediates requests between clients and external resources, often for filtering, caching, or anonymity.'},
{obj:'3.2', q:'Which firewall failure mode allows traffic to pass through unfiltered if the device fails, prioritizing availability over security?', c:['Fail-closed','Fail-open','Active','Passive'], a:1, e:'Fail-open devices allow traffic to continue flowing on failure, favoring availability at the cost of security.'},
{obj:'3.2', q:'A next-generation firewall that inspects traffic based on the specific application generating it, rather than just port/protocol, is operating at which layer?', c:['Layer 2','Layer 3','Layer 4','Layer 7'], a:3, e:'Application-aware inspection (NGFW) operates at Layer 7, examining the actual application data.'},
{obj:'3.2', q:'Which technology combines SD-WAN and a suite of cloud-delivered security services into a single architecture?', c:['VPN','SASE','IPSec','UTM'], a:1, e:'Secure Access Service Edge (SASE) converges networking (SD-WAN) and security functions into one cloud-delivered service.'},
// 3.3 Protect data
{obj:'3.3', q:'Replacing sensitive data with a non-sensitive placeholder value that maps back to the original in a secure vault is called:', c:['Masking','Tokenization','Hashing','Segmentation'], a:1, e:'Tokenization substitutes sensitive data with a token that has no exploitable value outside the tokenization system.'},
{obj:'3.3', q:'Data actively being processed in a system\'s RAM is considered to be in which state?', c:['Data at rest','Data in transit','Data in use','Data in escrow'], a:2, e:'Data in use refers to data actively being processed or accessed in memory, requiring protections like encrypted enclaves.'},
{obj:'3.3', q:'A regulation requiring that customer data physically remain within a specific country\'s borders relates to:', c:['Data sovereignty','Geolocation','Data masking','Segmentation'], a:0, e:'Data sovereignty concerns legal requirements that data be governed by and stored within a specific jurisdiction.'},
// 3.4 Resilience and recovery
{obj:'3.4', q:'A fully equipped, ready-to-activate alternate processing site that can take over operations almost immediately is a:', c:['Cold site','Warm site','Hot site','Geographic dispersion site'], a:2, e:'A hot site is fully configured and can assume production operations with minimal delay.'},
{obj:'3.4', q:'Which backup strategy captures a point-in-time image of a system state, commonly used for virtual machines?', c:['Snapshot','Journaling','Replication','Differential backup'], a:0, e:'A snapshot captures the exact state of a system at a specific point in time, enabling quick rollback.'},
{obj:'3.4', q:'Recovery Point Objective (RPO) primarily measures:', c:['How long a system can be down','How much data loss is acceptable, measured in time','How often backups are tested','The cost of downtime'], a:1, e:'RPO defines the maximum acceptable amount of data loss, measured as a time interval since the last good backup.'},
{obj:'3.4', q:'A tabletop exercise is best described as:', c:['A live failover to the backup site','A discussion-based walkthrough of a response plan','An automated recovery script','A parallel processing test'], a:1, e:'Tabletop exercises are discussion-based simulations where teams walk through their response to a scenario without disrupting live systems.'},
// 4.1 Security techniques
{obj:'4.1', q:'Which mobile deployment model allows employees to use personal devices for work but grants the company partial control?', c:['BYOD','COPE','CYOD','MDM'], a:0, e:'Bring Your Own Device (BYOD) lets employees use personal devices, typically enrolled with limited corporate control via MDM.'},
{obj:'4.1', q:'Running untrusted code in an isolated environment to observe its behavior without risking the host system is called:', c:['Sandboxing','Segmentation','Hardening','Static code analysis'], a:0, e:'Sandboxing isolates and executes untrusted code/files in a contained environment to analyze behavior safely.'},
{obj:'4.1', q:'Which wireless security protocol is the current recommended standard offering the strongest protection?', c:['WEP','WPA','WPA2','WPA3'], a:3, e:'WPA3 is the latest Wi-Fi security standard, offering stronger encryption and protection against offline attacks.'},
{obj:'4.1', q:'Verifying that user-supplied form data conforms to expected formats before processing is called:', c:['Input validation','Code signing','Static analysis','Secure cookies'], a:0, e:'Input validation checks and sanitizes data before use to prevent injection and other attacks.'},
// 4.2 Asset management
{obj:'4.2', q:'Which disposal method physically destroys a storage medium so data cannot be recovered by any means?', c:['Sanitization','Destruction','Data retention','Classification'], a:1, e:'Destruction physically damages media (shredding, incineration, degaussing) to make data unrecoverable.'},
{obj:'4.2', q:'Providing documented proof that data has been properly sanitized before asset disposal is called:', c:['Certification','Enumeration','Ownership','Acquisition'], a:0, e:'Certification of sanitization provides formal documentation that data destruction/wiping was completed correctly.'},
{obj:'4.2', q:'Continuously scanning the network to build and maintain an accurate list of connected devices is called:', c:['Enumeration','Classification','Procurement','Assignment'], a:0, e:'Enumeration involves actively discovering and cataloging assets connected to the network.'},
// 4.3 Vulnerability management
{obj:'4.3', q:'A scan result that flags a vulnerability which does not actually exist on the system is called a:', c:['False positive','False negative','True positive','Exposure factor'], a:0, e:'A false positive incorrectly reports a vulnerability that isn\'t actually present, wasting remediation effort if unverified.'},
{obj:'4.3', q:'Which scoring system provides a standardized numeric severity rating (0–10) for a given vulnerability?', c:['CVE','CVSS','SCAP','OSINT'], a:1, e:'The Common Vulnerability Scoring System (CVSS) provides a standardized severity score to help prioritize remediation.'},
{obj:'4.3', q:'A program that pays external researchers for responsibly disclosing discovered vulnerabilities is called a:', c:['Bug bounty program','Penetration test','System audit','Threat feed'], a:0, e:'Bug bounty programs incentivize ethical hackers to find and report vulnerabilities responsibly in exchange for rewards.'},
{obj:'4.3', q:'After patching a vulnerability, re-running a scan to confirm the issue no longer exists is called:', c:['Prioritization','Rescanning','Exposure analysis','Risk tolerance review'], a:1, e:'Rescanning validates that remediation was successful and the vulnerability has actually been resolved.'},
// 4.4 Alerting and monitoring
{obj:'4.4', q:'Which tool centralizes log collection and correlation from many sources to generate security alerts?', c:['DLP','SIEM','SNMP trap','NetFlow'], a:1, e:'A SIEM (Security Information and Event Management) aggregates and correlates logs to detect and alert on security events.'},
{obj:'4.4', q:'Adjusting alert thresholds to reduce the number of false positives an analyst must review is known as:', c:['Alert tuning','Quarantine','Log aggregation','Archiving'], a:0, e:'Alert tuning refines detection rules and thresholds so alerts are more accurate and actionable.'},
{obj:'4.4', q:'Which protocol standard is used to package machine benchmarks and automate compliance/configuration scanning?', c:['SCAP','SNMP','NetFlow','DLP'], a:0, e:'Security Content Automation Protocol (SCAP) standardizes vulnerability and configuration compliance checking.'},
// 4.5 Enhance capabilities
{obj:'4.5', q:'Which email security mechanism allows a receiving mail server to verify that a message was actually sent from an authorized IP address for that domain?', c:['DKIM','SPF','DMARC','S/MIME'], a:1, e:'Sender Policy Framework (SPF) publishes authorized sending IPs for a domain in DNS to prevent spoofing.'},
{obj:'4.5', q:'Which technology combines the capabilities of an IDS/IPS, firewall, and content filtering into a single appliance?', c:['WAF','UTM','NAC','DLP'], a:1, e:'A Unified Threat Management (UTM) appliance bundles multiple security functions into a single device.'},
{obj:'4.5', q:'Which tool specifically enforces policy requirements (e.g., patch level, AV status) before allowing a device onto the network?', c:['NAC','EDR','FIM','DNS filtering'], a:0, e:'Network Access Control (NAC) evaluates device posture/policy compliance before granting network access.'},
{obj:'4.5', q:'A tool that monitors user activity patterns to flag anomalous behavior compared to an established baseline is called:', c:['User behavior analytics','File integrity monitoring','DNS filtering','Web filtering'], a:0, e:'User (and Entity) Behavior Analytics (UBA/UEBA) baselines normal activity and flags deviations that may indicate compromise.'},
// 4.6 Identity and access management
{obj:'4.6', q:'Which access control model assigns permissions based on a user\'s job function within the organization?', c:['DAC','MAC','RBAC','Rule-based'], a:2, e:'Role-Based Access Control (RBAC) grants permissions according to predefined roles tied to job functions.'},
{obj:'4.6', q:'Which authentication factor category does a fingerprint scan belong to?', c:['Something you know','Something you have','Something you are','Somewhere you are'], a:2, e:'Biometrics such as fingerprints fall under "something you are," an inherence factor.'},
{obj:'4.6', q:'Granting a user elevated permissions only for a limited, predefined time window is an example of:', c:['Just-in-time permissions','Password vaulting','Federation','Attestation'], a:0, e:'Just-in-time (JIT) permissions grant temporary elevated access only when needed, reducing standing privilege risk.'},
{obj:'4.6', q:'Which protocol is commonly used to enable single sign-on by exchanging XML-based authentication assertions between an identity provider and service provider?', c:['OAuth','LDAP','SAML','RADIUS'], a:2, e:'Security Assertion Markup Language (SAML) exchanges authentication/authorization assertions to enable SSO.'},
// 4.7 Automation
{obj:'4.7', q:'Automatically creating and provisioning a new employee\'s accounts and access across multiple systems is an example of using automation for:', c:['User provisioning','Guard rails','Continuous integration','Escalation'], a:0, e:'Automated user provisioning streamlines account creation, reducing manual errors and delays.'},
{obj:'4.7', q:'Which is a primary risk/consideration introduced by heavy reliance on automation and orchestration?', c:['Increased reaction time','Single point of failure','Reduced scalability','Reduced consistency of configurations'], a:1, e:'Automated systems can become a single point of failure — if a script or workflow is flawed, the impact can scale rapidly.'},
{obj:'4.7', q:'Which benefit of automation refers to freeing up staff to focus on higher-value tasks rather than repetitive ones?', c:['Workforce multiplier','Technical debt','Complexity','Ongoing supportability'], a:0, e:'Automation acts as a workforce multiplier, extending the effective capacity of a limited security team.'},
// 4.8 Incident response
{obj:'4.8', q:'Which incident response phase involves determining the root cause and scope of the incident?', c:['Preparation','Detection','Analysis','Containment'], a:2, e:'Analysis involves investigating and understanding the scope, method, and root cause of an incident.'},
{obj:'4.8', q:'Isolating an infected host from the network to prevent further spread is part of which IR phase?', c:['Eradication','Containment','Recovery','Lessons learned'], a:1, e:'Containment limits the spread and impact of an incident, often by isolating affected systems.'},
{obj:'4.8', q:'Maintaining a documented, unbroken record of who handled evidence and when is required to preserve:', c:['Legal hold','Chain of custody','E-discovery','Preservation'], a:1, e:'Chain of custody documents evidence handling to maintain its integrity and admissibility.'},
{obj:'4.8', q:'Proactively searching a network for signs of compromise that automated tools may have missed is called:', c:['Threat hunting','Root cause analysis','Digital forensics','Preparation'], a:0, e:'Threat hunting is a proactive, human-driven search for hidden threats not caught by existing detection tools.'},
// 4.9 Data sources
{obj:'4.9', q:'Which log type would be most useful for identifying which firewall rule blocked a specific connection attempt?', c:['Application logs','Firewall logs','Endpoint logs','Metadata'], a:1, e:'Firewall logs record allowed/denied connections and the specific rules that were applied.'},
{obj:'4.9', q:'Full packet captures are most useful for investigators when they need to:', c:['See a high-level traffic summary only','Reconstruct exact network communications','View only aggregate statistics','Determine file ownership'], a:1, e:'Packet captures (PCAPs) preserve raw traffic data, allowing analysts to fully reconstruct communications.'},
{obj:'4.9', q:'Information embedded within a file, such as author, creation date, or GPS coordinates, is referred to as:', c:['Metadata','A dashboard','An automated report','A vulnerability scan'], a:0, e:'Metadata is descriptive data about a file or object that can provide valuable forensic context.'},
// 5.1 Governance
{obj:'5.1', q:'A policy that defines what employees are and are not permitted to do with company IT resources is called a(n):', c:['Acceptable Use Policy','Business continuity policy','Change management policy','SDLC policy'], a:0, e:'An Acceptable Use Policy (AUP) defines permitted and prohibited use of organizational systems and resources.'},
{obj:'5.1', q:'The individual or group ultimately accountable for a data asset, including classification decisions, is the data:', c:['Custodian','Processor','Owner','Controller'], a:2, e:'The data owner holds ultimate accountability for a data asset, including its classification and protection requirements.'},
{obj:'5.1', q:'Which governance structure model concentrates decision-making authority within a single central group?', c:['Decentralized','Centralized','Committee-based','Board-based'], a:1, e:'A centralized governance structure places authority and decision-making in one central group rather than distributing it.'},
// 5.2 Risk management
{obj:'5.2', q:'Single Loss Expectancy (SLE) is calculated as:', c:['Asset Value × Exposure Factor','Asset Value × ARO','ARO × Exposure Factor','ALE ÷ ARO'], a:0, e:'SLE = Asset Value (AV) × Exposure Factor (EF), representing the expected monetary loss from a single occurrence.'},
{obj:'5.2', q:'A company purchases cyber insurance to cover potential losses from a data breach. This risk management strategy is called:', c:['Avoidance','Mitigation','Transfer','Acceptance'], a:2, e:'Risk transfer shifts the financial impact of risk to a third party, such as through insurance.'},
{obj:'5.2', q:'Choosing not to launch a risky new product to avoid the associated risk entirely is an example of risk:', c:['Acceptance','Avoidance','Mitigation','Exemption'], a:1, e:'Risk avoidance eliminates the activity or exposure that creates the risk altogether.'},
{obj:'5.2', q:'Which metric represents the average time between system failures?', c:['MTTR','MTBF','RTO','RPO'], a:1, e:'Mean Time Between Failures (MTBF) measures the average operational time between system failures, indicating reliability.'},
// 5.3 Third-party risk
{obj:'5.3', q:'A contractual clause that grants an organization the right to audit its vendor\'s security practices is called a(n):', c:['NDA','Right-to-audit clause','SLA','MOU'], a:1, e:'A right-to-audit clause allows a customer to formally inspect and verify a vendor\'s security controls.'},
{obj:'5.3', q:'Which document defines the measurable performance expectations (e.g., uptime) a vendor must meet?', c:['SLA','NDA','BPA','MSA'], a:0, e:'A Service-Level Agreement (SLA) defines specific measurable performance targets a vendor commits to.'},
{obj:'5.3', q:'A legal agreement preventing a vendor from disclosing confidential information shared during a business relationship is a(n):', c:['MOU','NDA','SOW','MOA'], a:1, e:'A Non-Disclosure Agreement (NDA) legally binds parties to keep specific shared information confidential.'},
// 5.4 Compliance
{obj:'5.4', q:'A regulation granting EU residents the right to have their personal data deleted upon request reflects which concept?', c:['Right to be forgotten','Data sovereignty','Due diligence','Attestation'], a:0, e:'The "right to be forgotten" allows individuals to request the erasure of their personal data under regulations like GDPR.'},
{obj:'5.4', q:'Which role is legally responsible for determining the purposes and means of processing personal data?', c:['Data processor','Data controller','Data custodian','Data subject'], a:1, e:'The data controller determines why and how personal data is processed, bearing primary legal responsibility.'},
{obj:'5.4', q:'A potential consequence of failing to comply with a regulatory framework such as PCI DSS could include:', c:['Automatic risk transfer','Fines and loss of processing privileges','Improved audit committee ratings','Mandatory risk acceptance'], a:1, e:'Non-compliance can lead to fines, sanctions, reputational damage, and loss of ability to process certain transactions.'},
// 5.5 Audits and assessments
{obj:'5.5', q:'A penetration test in which the testers are given full knowledge of the network architecture beforehand is called a(n):', c:['Unknown environment test','Partially known environment test','Known environment test','Passive reconnaissance test'], a:2, e:'A known (white-box) environment test provides testers full internal knowledge of systems and architecture in advance.'},
{obj:'5.5', q:'Gathering information about a target using only publicly available sources, without directly interacting with target systems, is:', c:['Active reconnaissance','Passive reconnaissance','Offensive testing','Integrated testing'], a:1, e:'Passive reconnaissance collects information without directly engaging or scanning the target, minimizing detection risk.'},
{obj:'5.5', q:'A review conducted by an organization\'s own audit committee, without external involvement, is classified as a(n):', c:['External audit','Internal audit','Independent third-party audit','Regulatory examination'], a:1, e:'An internal audit is performed by the organization\'s own personnel rather than an outside party.'},
// 5.6 Security awareness
{obj:'5.6', q:'Training employees to identify suspicious emails and safely report them supports which security awareness goal?', c:['Insider threat elimination','Phishing recognition and reporting','Operational security enforcement','Removable media control'], a:1, e:'Awareness training on phishing helps users recognize and properly report suspicious messages before they cause harm.'},
{obj:'5.6', q:'An employee accessing far more files than their role requires, without a business reason, is an example of which anomalous behavior category?', c:['Unintentional','Unexpected','Risky','Recurring'], a:2, e:'Excessive, unexplained access represents risky behavior that may indicate misuse or a compromised account.'},
{obj:'5.6', q:'Conducting recurring, rather than one-time, security awareness training primarily helps to:', c:['Reduce initial onboarding time','Reinforce behaviors and adapt to evolving threats','Eliminate the need for phishing simulations','Replace technical controls entirely'], a:1, e:'Recurring training reinforces good habits over time and keeps staff current on emerging threats and tactics.'},
// ===== 1.1 Security controls (15 new) =====
{obj:'1.1', q:'Requiring two employees to jointly authorize a wire transfer is an example of which type of control?', c:['Preventive','Detective','Compensating','Directive'], a:0, e:'Dual control/separation of duties prevents fraud before it happens, making it a preventive control.'},
{obj:'1.1', q:'A "Do Not Enter" sign posted at a restricted server room door is best classified as which control type?', c:['Deterrent','Detective','Corrective','Compensating'], a:0, e:'Deterrent controls discourage violations without physically stopping them, such as warning signage.'},
{obj:'1.1', q:'Restoring a system from a clean backup after a malware infection is an example of a:', c:['Preventive control','Corrective control','Deterrent control','Directive control'], a:1, e:'Corrective controls act after an incident to restore normal operations, such as restoring from backup.'},
{obj:'1.1', q:'A written policy mandating that all laptops be encrypted is an example of which control category?', c:['Technical','Managerial','Physical','Operational'], a:1, e:'Managerial controls are administrative policies and procedures that direct security behavior.'},
{obj:'1.1', q:'A security guard patrolling a facility at random intervals is an example of which control category?', c:['Technical','Operational','Managerial','Compensating'], a:1, e:'Operational controls are implemented primarily by people carrying out day-to-day security procedures.'},
{obj:'1.1', q:'An organization requires new employees to complete security training before receiving system access. This is an example of a:', c:['Directive control','Compensating control','Detective control','Physical control'], a:0, e:'Directive controls establish required actions or behavior, such as mandatory training policies.'},
{obj:'1.1', q:'CCTV footage reviewed after a break-in to identify the intruder is an example of which control type?', c:['Preventive','Detective','Deterrent','Corrective'], a:1, e:'Detective controls identify that an event occurred, such as reviewing camera footage after the fact.'},
{obj:'1.1', q:'An intrusion prevention system (IPS) that automatically drops malicious packets is functioning as a:', c:['Detective control','Preventive control','Deterrent control','Compensating control'], a:1, e:'Because it actively blocks the traffic before it reaches its target, an IPS acts as a preventive control.'},
{obj:'1.1', q:'A firewall rule set is an example of which control category?', c:['Physical','Technical','Managerial','Operational'], a:1, e:'Technical controls are implemented through technology, such as firewalls, encryption, and access control lists.'},
{obj:'1.1', q:'Bollards installed in front of a building entrance are an example of which control category?', c:['Technical','Physical','Managerial','Operational'], a:1, e:'Bollards are tangible physical barriers designed to prevent vehicle-based attacks.'},
{obj:'1.1', q:'An organization cannot immediately patch a critical vulnerability, so it adds extra network monitoring around the affected system instead. This is an example of a:', c:['Preventive control','Compensating control','Directive control','Deterrent control'], a:1, e:'A compensating control provides alternative protection when the primary control cannot be applied.'},
{obj:'1.1', q:'Which pairing correctly matches a control TYPE (not category) with its primary purpose?', c:['Detective — stops an attack before it happens','Deterrent — discourages an attacker from attempting an action','Corrective — identifies that an incident occurred','Compensating — replaces the need for any documentation'], a:1, e:'Deterrent controls are meant to discourage a threat actor from attempting a violation in the first place.'},
{obj:'1.1', q:'Mandatory vacation policies that force employees to take time off are primarily intended to function as which control type?', c:['Preventive','Detective','Directive','Physical'], a:1, e:'Mandatory vacations are detective in nature, since fraud is often only uncovered while the perpetrator is away.'},
{obj:'1.1', q:'A locked server cabinet inside a data center is an example of which control category?', c:['Technical','Physical','Managerial','Operational'], a:1, e:'A locked cabinet is a tangible physical barrier restricting access to hardware.'},
{obj:'1.1', q:'An annual risk assessment mandated by company policy is best categorized as which control type?', c:['Technical','Directive','Compensating','Deterrent'], a:1, e:'Directive controls mandate that a specific action, like conducting a risk assessment, be performed.'},

// ===== 1.2 Fundamental security concepts (15 new) =====
{obj:'1.2', q:'A hash mismatch on a downloaded file indicates a possible violation of which security principle?', c:['Confidentiality','Integrity','Availability','Non-repudiation'], a:1, e:'Hashing verifies that data has not been altered; a mismatch suggests an integrity violation.'},
{obj:'1.2', q:'A DDoS attack that takes a web server offline primarily violates which principle of the CIA triad?', c:['Confidentiality','Integrity','Availability','Non-repudiation'], a:2, e:'Availability ensures systems and data remain accessible; a DDoS attack directly disrupts that.'},
{obj:'1.2', q:'Digitally signing a contract so the signer cannot later deny having signed it provides which security property?', c:['Confidentiality','Availability','Non-repudiation','Authorization'], a:2, e:'Non-repudiation ensures a party cannot deny having performed an action, typically via digital signatures.'},
{obj:'1.2', q:'In the AAA framework, verifying that a user is who they claim to be occurs during which phase?', c:['Accounting','Authorization','Authentication','Auditing'], a:2, e:'Authentication is the process of confirming a claimed identity, typically via credentials.'},
{obj:'1.2', q:'In the AAA framework, determining what an already-authenticated user is permitted to do occurs during which phase?', c:['Authentication','Authorization','Accounting','Identification'], a:1, e:'Authorization determines the permissions or access level granted after identity is confirmed.'},
{obj:'1.2', q:'In a Zero Trust architecture, the component that actually allows or blocks a connection based on a policy decision is the:', c:['Policy Engine','Policy Administrator','Policy Enforcement Point','Subject'], a:2, e:'The Policy Enforcement Point is the gatekeeper that carries out the access decision made by the control plane.'},
{obj:'1.2', q:'Under a Zero Trust model, network zones that automatically grant access based on network location alone represent:', c:['Policy-driven access control','Implicit trust zones','Threat scope reduction','Adaptive identity'], a:1, e:'Implicit trust zones are exactly what Zero Trust seeks to eliminate — assuming trust based on location.'},
{obj:'1.2', q:'A decoy database table filled with fake customer records, designed to detect unauthorized queries, is an example of a:', c:['Honeynet','Honeytoken','Honeypot','Honeyfile'], a:1, e:'A honeytoken is a fake piece of data (like a bogus record) planted to detect unauthorized access or misuse.'},
{obj:'1.2', q:'An entire decoy network segment, complete with fake servers, designed to study attacker behavior is called a:', c:['Honeypot','Honeyfile','Honeynet','Honeytoken'], a:2, e:'A honeynet is a network of honeypots that simulates a real environment to observe attacker techniques.'},
{obj:'1.2', q:'Comparing an organization\'s current security posture against a desired target state is called a:', c:['Threat assessment','Gap analysis','Penetration test','Vulnerability scan'], a:1, e:'Gap analysis identifies the difference between current and desired security states to guide remediation planning.'},
{obj:'1.2', q:'A microwave-based motion sensor protecting a warehouse perimeter is an example of which physical security control?', c:['Access control vestibule','Sensor','Bollard','Access badge'], a:1, e:'Microwave sensors are one type of motion-detecting sensor used for physical intrusion detection.'},
{obj:'1.2', q:'A small enclosed space with two interlocking doors, requiring the first to close before the second opens, is a(n):', c:['Bollard','Access control vestibule','Fencing perimeter','Honeynet'], a:1, e:'An access control vestibule (mantrap) prevents tailgating by only allowing one person through at a time.'},
{obj:'1.2', q:'Which term describes verifying that a certificate presented by a server actually belongs to the server (a form of system authentication)?', c:['Authenticating people','Authenticating systems','Accounting','Authorization models'], a:1, e:'Authenticating systems validates the identity of a device or service, often through certificates, rather than a human user.'},
{obj:'1.2', q:'Ultrasonic sensors, like infrared and microwave sensors, are primarily used for:', c:['Encrypting data at rest','Detecting motion or intrusion','Authenticating users','Managing certificate lifecycles'], a:1, e:'Ultrasonic sensors detect motion or the presence of an intruder based on sound wave reflection.'},
{obj:'1.2', q:'Which authorization model would be most appropriate for granting a contractor read-only access strictly during their contract dates?', c:['A honeytoken','An access badge','An authorization model with time-based conditions','A physical security guard'], a:2, e:'Authorization models can incorporate conditions such as time bounds to restrict when access is valid.'},

// ===== 1.3 Change management (15 new) =====
{obj:'1.3', q:'Identifying every system, application, and process that could be affected by a proposed change is called:', c:['Backout planning','Impact analysis','Version control','Maintenance windows'], a:1, e:'Impact analysis evaluates the potential effects of a change before it is approved and implemented.'},
{obj:'1.3', q:'Which stakeholder role is primarily responsible for formally approving a proposed change before implementation?', c:['Change owner','Approval process participants','Standard operating procedure author','Legacy application owner'], a:1, e:'The approval process defines who must review and formally sign off on a change before it proceeds.'},
{obj:'1.3', q:'A pre-scheduled period during which planned changes may cause service disruption without violating SLAs is called a:', c:['Backout plan','Maintenance window','Impact analysis period','Test results window'], a:1, e:'A maintenance window is an agreed-upon time slot for making changes that may cause downtime.'},
{obj:'1.3', q:'Which technical implication of a change refers to explicitly permitting or blocking certain traffic or applications?', c:['Allow lists/deny lists','Service restart','Downtime','Dependencies'], a:0, e:'Allow lists and deny lists explicitly define what is permitted or blocked as part of implementing a change.'},
{obj:'1.3', q:'A documented, repeatable set of instructions for performing a routine change is called a:', c:['Backout plan','Standard operating procedure','Impact analysis','Version control record'], a:1, e:'A standard operating procedure (SOP) documents the repeatable steps for performing routine tasks or changes.'},
{obj:'1.3', q:'Before implementing a firewall rule change, an administrator identifies which legacy applications might break as a result. This step is part of:', c:['Version control','Impact analysis','Backout planning','Maintenance windows'], a:1, e:'Impact analysis specifically considers effects on dependencies, including legacy applications.'},
{obj:'1.3', q:'Keeping a historical record of configuration file changes over time, with the ability to revert to prior versions, is called:', c:['Version control','Backout planning','Standard operating procedure','Maintenance window'], a:0, e:'Version control tracks and manages changes to files or configurations over time.'},
{obj:'1.3', q:'Which of the following is a technical implication that specifically concerns systems that may not support a proposed change?', c:['Legacy applications','Ownership','Stakeholders','Test results'], a:0, e:'Legacy applications are systems that may be incompatible with new changes due to outdated architecture or support.'},
{obj:'1.3', q:'Failing to update network diagrams after a significant infrastructure change primarily creates risk to which change management goal?', c:['Backout planning','Accurate documentation','Testing','Approval workflows'], a:1, e:'Outdated diagrams undermine documentation accuracy, which is critical for future troubleshooting and audits.'},
{obj:'1.3', q:'Verifying, in a lab environment, that a planned change works as expected before deploying to production is part of:', c:['Test results','Ownership','Stakeholders','Maintenance window'], a:0, e:'Test results document whether a change performed as expected prior to production deployment.'},
{obj:'1.3', q:'Who within an organization is typically identified during change management as accountable for a specific system or asset?', c:['Ownership','Dependencies','Restricted activities','Service restart'], a:0, e:'Ownership identifies the individual or team accountable for a system, which is documented during change management.'},
{obj:'1.3', q:'A change management process that requires restarting a critical application is documenting which technical implication?', c:['Application restart','Allow lists/deny lists','Downtime','Dependencies'], a:0, e:'Application restart is explicitly called out as a technical implication that may be required by a change.'},
{obj:'1.3', q:'Which of these is NOT typically part of the business processes impacting a change\'s security review?', c:['Approval process','Stakeholders','Backout plan','Certificate signing request'], a:3, e:'A certificate signing request is a cryptographic concept from objective 1.4, not a change management business process.'},
{obj:'1.3', q:'An organization restricts certain administrative activities during a change window to reduce risk. This is documented as:', c:['Restricted activities','Version control','Backout plan','Standard operating procedure'], a:0, e:'Restricted activities limit what actions can be taken during a sensitive change period to reduce risk.'},
{obj:'1.3', q:'Updating formal security policies and procedures to reflect a newly implemented change is part of which change management element?', c:['Documentation','Testing','Approval process','Maintenance window'], a:0, e:'Documentation updates, including policies and procedures, ensure the change is reflected in governing records.'},

// ===== 1.4 Cryptographic solutions (15 new) =====
{obj:'1.4', q:'Which encryption approach is generally faster and better suited for encrypting large volumes of data at rest?', c:['Asymmetric encryption','Symmetric encryption','Digital signatures','Key escrow'], a:1, e:'Symmetric encryption is computationally faster than asymmetric encryption, making it ideal for bulk data.'},
{obj:'1.4', q:'A trusted third party holds a copy of an encryption key in case the original is lost. This practice is called:', c:['Key stretching','Key escrow','Key exchange','Obfuscation'], a:1, e:'Key escrow involves storing a copy of a cryptographic key with a trusted third party for recovery purposes.'},
{obj:'1.4', q:'Encrypting an entire hard drive so that all data becomes unreadable without the boot-time key is known as:', c:['File-level encryption','Full-disk encryption','Record-level encryption','Database encryption'], a:1, e:'Full-disk encryption protects the entire volume, rendering all data unreadable without proper authentication.'},
{obj:'1.4', q:'Which of the following is an example of encryption applied specifically at the volume level rather than the whole disk?', c:['Full-disk encryption','Partition encryption','Record encryption','Transport encryption'], a:1, e:'Partition/volume encryption secures a defined logical section of storage rather than the entire physical disk.'},
{obj:'1.4', q:'A tamper-resistant chip built into a laptop\'s motherboard that securely stores encryption keys used for full-disk encryption is called a:', c:['HSM','TPM','CSR','CRL'], a:1, e:'A Trusted Platform Module (TPM) is embedded hardware used to securely generate and store cryptographic keys on a device.'},
{obj:'1.4', q:'A dedicated, centralized appliance that manages cryptographic keys across many servers in a data center is best described as a:', c:['TPM','Key management system','Secure enclave','Certificate signing request'], a:1, e:'A key management system centrally manages the lifecycle of cryptographic keys across an enterprise.'},
{obj:'1.4', q:'Hiding a secret message within the pixel data of an image file is an example of:', c:['Tokenization','Data masking','Steganography','Salting'], a:2, e:'Steganography conceals data within another file or medium so its presence isn\'t obvious.'},
{obj:'1.4', q:'Replacing a customer\'s credit card number with a randomly generated surrogate value, while storing the real number in a separate secure vault, is called:', c:['Data masking','Tokenization','Steganography','Hashing'], a:1, e:'Tokenization substitutes sensitive data with a non-sensitive token that maps back to the original via a secure vault.'},
{obj:'1.4', q:'Displaying only the last four digits of a Social Security number on a customer service screen, while the full number is unchanged in the database, is an example of:', c:['Tokenization','Data masking','Key escrow','Obfuscation via steganography'], a:1, e:'Data masking obscures part of the data for display purposes while the underlying value remains unchanged.'},
{obj:'1.4', q:'Which mechanism allows a browser to verify a certificate\'s validity in real time by querying a single endpoint, rather than downloading an entire revocation list?', c:['CRL','OCSP','CSR','Root of trust'], a:1, e:'OCSP (Online Certificate Status Protocol) allows real-time, per-certificate revocation checks.'},
{obj:'1.4', q:'A certificate that is signed by its own private key rather than by a recognized certificate authority is called:', c:['A wildcard certificate','A self-signed certificate','A third-party certificate','A root of trust certificate'], a:1, e:'A self-signed certificate is signed by the entity itself rather than a trusted external CA.'},
{obj:'1.4', q:'A single certificate that secures a base domain and all of its subdomains (e.g., *.example.com) is called a:', c:['Self-signed certificate','Wildcard certificate','Root certificate','CSR'], a:1, e:'A wildcard certificate covers a domain and all its first-level subdomains under one certificate.'},
{obj:'1.4', q:'Applying an algorithm like PBKDF2 to repeatedly process a password before storage is known as:', c:['Salting','Key stretching','Tokenization','Digital signing'], a:1, e:'Key stretching applies repeated computation to a password/key to slow down brute-force attacks.'},
{obj:'1.4', q:'Which technology underlies cryptocurrencies by maintaining a distributed, tamper-evident, chronological record of transactions?', c:['Open public ledger (blockchain)','Key escrow','Certificate revocation list','Steganography'], a:0, e:'Blockchain functions as an open public ledger, providing a decentralized, tamper-evident transaction record.'},
{obj:'1.4', q:'A digital signature primarily provides which two security properties for a signed message?', c:['Confidentiality and availability','Integrity and non-repudiation','Authorization and accounting','Obfuscation and masking'], a:1, e:'Digital signatures verify that a message hasn\'t been altered (integrity) and confirm who sent it (non-repudiation).'},

// ===== 2.1 Threat actors and motivations (15 new) =====
{obj:'2.1', q:'Which threat actor category typically has the LEAST amount of technical skill and often relies on pre-built tools?', c:['Nation-state','Organized crime','Unskilled attacker','Insider threat'], a:2, e:'Unskilled attackers (sometimes called "script kiddies") generally lack deep technical skill and rely on existing tools.'},
{obj:'2.1', q:'A criminal syndicate that runs ransomware operations purely to generate profit is best classified as which threat actor type?', c:['Hacktivist','Organized crime','Nation-state','Shadow IT'], a:1, e:'Organized crime groups are financially motivated and often run large-scale, profit-driven cyber operations.'},
{obj:'2.1', q:'Which attribute of a threat actor refers to whether the individual originates from within or outside the targeted organization?', c:['Resources/funding','Internal/external','Level of sophistication','Motivation'], a:1, e:'The internal/external attribute classifies whether the actor is a trusted insider or an outside party.'},
{obj:'2.1', q:'A disgruntled former employee who still has valid credentials and uses them to sabotage systems is best classified as a(n):', c:['Nation-state actor','Insider threat','Hacktivist','Unskilled attacker'], a:1, e:'Insider threats originate from individuals with legitimate or prior access to systems, such as employees.'},
{obj:'2.1', q:'An attacker whose primary goal is to gather classified government information over an extended, stealthy campaign is most likely motivated by:', c:['Financial gain','Espionage','Revenge','Disruption/chaos'], a:1, e:'Espionage involves covertly gathering sensitive or classified information, often by nation-state actors.'},
{obj:'2.1', q:'Threatening to release stolen sensitive photos unless a ransom is paid is an example of which motivation?', c:['Blackmail','Ethical','Philosophical/political beliefs','War'], a:0, e:'Blackmail involves coercing a victim by threatening to expose damaging or sensitive information.'},
{obj:'2.1', q:'A researcher who responsibly discloses a vulnerability to a vendor, driven by a sense of professional responsibility, best reflects which motivation?', c:['Revenge','Ethical','Disruption/chaos','Financial gain'], a:1, e:'Ethical motivation reflects a desire to act responsibly and improve security, as seen in responsible disclosure.'},
{obj:'2.1', q:'A nation-state actor conducting cyberattacks in direct support of active military operations is primarily motivated by:', c:['War','Espionage','Blackmail','Philosophical/political beliefs'], a:0, e:'Attacks conducted as part of active military conflict are categorized under the "war" motivation.'},
{obj:'2.1', q:'Employees using an unauthorized personal cloud storage account to share company files is a direct example of:', c:['Organized crime','Shadow IT','Hacktivism','Insider threat with malicious intent'], a:1, e:'Shadow IT refers to technology used without official IT approval, regardless of malicious intent.'},
{obj:'2.1', q:'Which attribute best distinguishes a nation-state actor from an unskilled attacker?', c:['Internal/external status','Level of sophistication and available resources','Whether they use malware','Whether they target businesses'], a:1, e:'Nation-state actors typically have vastly greater resources, funding, and sophistication than unskilled attackers.'},
{obj:'2.1', q:'A group that defaces websites to protest a corporation\'s environmental policies is best classified as:', c:['Hacktivists','Organized crime','Nation-state','Unskilled attacker'], a:0, e:'Hacktivists are driven by political or social causes, often expressed through website defacement or disruption.'},
{obj:'2.1', q:'An attacker motivated purely by the thrill of causing widespread outages, without any political or financial goal, best reflects:', c:['Espionage','Disruption/chaos','Ethical','Blackmail'], a:1, e:'Disruption/chaos as a motivation reflects a desire to cause damage or disorder for its own sake.'},
{obj:'2.1', q:'Which of the following threat actors would most likely have access to zero-day exploits developed by a well-funded internal research team?', c:['Unskilled attacker','Shadow IT user','Nation-state','Hacktivist'], a:2, e:'Nation-state actors typically possess significant resources, including the ability to develop or acquire zero-day exploits.'},
{obj:'2.1', q:'An employee who exfiltrates trade secrets to sell to a competitor after being passed over for promotion is likely motivated by a combination of:', c:['Espionage and war','Revenge and financial gain','Ethical and philosophical beliefs','Disruption/chaos and blackmail'], a:1, e:'This scenario reflects both a personal grievance (revenge) and a monetary incentive (financial gain).'},
{obj:'2.1', q:'Which factor most directly impacts how quickly and effectively a threat actor can develop custom malware for a targeted campaign?', c:['Internal/external status','Resources/funding','Motivation','Whether the target is a business or individual'], a:1, e:'Resources and funding directly determine an actor\'s capability to develop or acquire sophisticated custom tools.'},

// ===== 2.2 Threat vectors and attack surfaces (15 new) =====
{obj:'2.2', q:'An attacker sends a malicious link via a corporate Slack channel instead of email. This is best categorized as which type of vector?', c:['Message-based (instant messaging)','File-based','Voice call','Removable device'], a:0, e:'Instant messaging platforms are a message-based threat vector, just like email or SMS.'},
{obj:'2.2', q:'A malicious macro embedded inside a Word document delivered as an email attachment is an example of which threat vector?', c:['Message-based','File-based','Image-based','Voice call'], a:1, e:'File-based vectors deliver malicious payloads through documents or executable files rather than the message body itself.'},
{obj:'2.2', q:'Malware hidden within the metadata of a seemingly harmless picture file is an example of which threat vector?', c:['Image-based','Voice call','Removable device','Unsecure networks'], a:0, e:'Image-based vectors embed malicious code or exploit image-parsing vulnerabilities within picture files.'},
{obj:'2.2', q:'An attacker calls an employee, impersonating IT support, to convince them to reveal their password. This is best categorized under which threat vector?', c:['File-based','Voice call','Image-based','Removable device'], a:1, e:'A voice call vector delivers a social engineering attack (in this case, vishing) over the phone.'},
{obj:'2.2', q:'An unattended USB drive left in a parking lot, designed to auto-run malware when plugged in, exploits which threat vector?', c:['Removable device','Unsecure networks','Open service ports','Supply chain'], a:0, e:'Removable devices like USB drives are a classic physical threat vector for delivering malware.'},
{obj:'2.2', q:'A web application still running a known-vulnerable, unpatched third-party library is an example of which threat vector?', c:['Default credentials','Vulnerable software','Open service ports','Unsupported systems and applications'], a:1, e:'Vulnerable software refers to applications or components with known, exploitable weaknesses.'},
{obj:'2.2', q:'Continuing to run a Windows Server 2008 machine years after its end-of-life date is a direct example of which threat vector?', c:['Vulnerable software','Unsupported systems and applications','Default credentials','Open service ports'], a:1, e:'Unsupported systems and applications no longer receive vendor security updates, creating persistent risk.'},
{obj:'2.2', q:'Connecting to a coffee shop\'s open, unencrypted wireless network is an example of which threat vector category?', c:['Wired unsecure network','Wireless unsecure network','Bluetooth unsecure network','Open service port'], a:1, e:'Public, unencrypted Wi-Fi networks are a classic example of a wireless unsecure network threat vector.'},
{obj:'2.2', q:'An attacker exploits an open Telnet port (23) that was never disabled on a legacy router. This is best described as which threat vector?', c:['Default credentials','Open service ports','Vulnerable software','Supply chain'], a:1, e:'Unnecessarily open, unused service ports provide a direct entry point for exploitation.'},
{obj:'2.2', q:'A device is compromised because it was shipped from the factory with an unchanged admin/admin login. This exploits which threat vector?', c:['Default credentials','Open service ports','Unsupported systems','Vulnerable software'], a:0, e:'Default credentials that are never changed after deployment are a common and easily exploited threat vector.'},
{obj:'2.2', q:'A breach originating from a compromised third-party component supplier used in building an organization\'s hardware is an example of a:', c:['Human vector','Supply chain vector','Message-based vector','Unsecure network vector'], a:1, e:'Supply chain vectors involve compromise introduced through vendors, suppliers, or manufacturing partners.'},
{obj:'2.2', q:'An attacker sends a fraudulent invoice email that appears to come from the CFO, requesting an urgent wire transfer. This is best classified as:', c:['Watering hole attack','Business email compromise','Typosquatting','Brand impersonation'], a:1, e:'Business email compromise (BEC) involves impersonating a trusted executive or partner to solicit fraudulent payments.'},
{obj:'2.2', q:'An attacker creates a fake login page that closely mimics a well-known brand\'s website to steal credentials. This is an example of:', c:['Pretexting','Brand impersonation','Watering hole attack','Misinformation/disinformation'], a:1, e:'Brand impersonation involves mimicking a trusted, recognizable brand to deceive victims.'},
{obj:'2.2', q:'A social engineer fabricates a believable cover story — claiming to be a new vendor rep — to gain building access. This technique is called:', c:['Pretexting','Typosquatting','Watering hole attack','Impersonation via image-based vector'], a:0, e:'Pretexting involves creating a fabricated scenario or false identity to manipulate a target.'},
{obj:'2.2', q:'Spreading intentionally false narratives about a company\'s product safety to damage its reputation is an example of:', c:['Misinformation/disinformation','Pretexting','Watering hole attack','Business email compromise'], a:0, e:'Disinformation is deliberately false information spread to deceive or manipulate public perception.'},

// ===== 2.3 Vulnerabilities (15 new) =====
{obj:'2.3', q:'A programming flaw where user input can inject and execute arbitrary code directly into a running process\'s memory space is called:', c:['Buffer overflow','Memory injection','Race condition','Directory traversal'], a:1, e:'Memory injection involves inserting malicious code directly into a running process\'s memory.'},
{obj:'2.3', q:'A vendor pushes a software update that unknowingly contains a supply-chain-compromised backdoor. This is an example of a:', c:['Malicious update','Race condition','Zero-day','Misconfiguration'], a:0, e:'A malicious update is a software patch that has been tampered with to introduce unauthorized functionality.'},
{obj:'2.3', q:'A vulnerability specific to firmware that has not been updated since a device was manufactured falls under which vulnerability category?', c:['Application vulnerability','Hardware vulnerability','Cloud-specific vulnerability','Web-based vulnerability'], a:1, e:'Firmware vulnerabilities are a category of hardware vulnerability tied to a device\'s low-level software.'},
{obj:'2.3', q:'Continuing to operate a device that the manufacturer no longer supports or patches represents which vulnerability type?', c:['Zero-day','End-of-life','Misconfiguration','Legacy (still-supported but outdated)'], a:1, e:'End-of-life systems no longer receive vendor updates or support, making known flaws permanently unpatched.'},
{obj:'2.3', q:'An older system still in production because a critical business process depends on it, despite known unresolved issues, best reflects which vulnerability category?', c:['Legacy','End-of-life','Zero-day','Cryptographic'], a:0, e:'Legacy systems remain in use despite being outdated, often due to compatibility or business dependency.'},
{obj:'2.3', q:'A flaw that allows code running inside a guest virtual machine to break out and interact with the host hypervisor is called:', c:['Resource reuse','VM escape','Race condition','Buffer overflow'], a:1, e:'VM escape vulnerabilities let malicious code operating inside a VM affect the underlying host system.'},
{obj:'2.3', q:'Sensitive data from a previous tenant remaining accessible to a new tenant in a shared cloud environment is an example of:', c:['VM escape','Resource reuse','Misconfiguration','Cloud-specific vulnerability only, not virtualization'], a:1, e:'Resource reuse vulnerabilities occur when shared resources retain residual data accessible to a new user.'},
{obj:'2.3', q:'A publicly exposed cloud storage bucket with no access restrictions, due to administrator error, is best classified as a:', c:['Zero-day vulnerability','Misconfiguration','Supply chain vulnerability','Cryptographic vulnerability'], a:1, e:'Misconfigurations are security weaknesses introduced by improper system or service settings rather than flawed code.'},
{obj:'2.3', q:'A weakness in an outdated cipher suite that makes encrypted traffic easier to decrypt is classified as a:', c:['Cryptographic vulnerability','Web-based vulnerability','Firmware vulnerability','Misconfiguration'], a:0, e:'Cryptographic vulnerabilities involve weaknesses in algorithms, key lengths, or implementations of encryption.'},
{obj:'2.3', q:'Installing an app from a third-party app store instead of the official one on an Android device is known as:', c:['Jailbreaking','Side loading','VM escape','Resource reuse'], a:1, e:'Side loading is installing apps from outside the sanctioned app store, bypassing vetting controls.'},
{obj:'2.3', q:'Removing manufacturer restrictions on an iPhone to gain root-level access and install unauthorized software is known as:', c:['Side loading','Jailbreaking','Resource reuse','Misconfiguration'], a:1, e:'Jailbreaking removes vendor restrictions on a mobile device, disabling many built-in security protections.'},
{obj:'2.3', q:'A vulnerability that a vendor is completely unaware of, and for which no patch yet exists, is called a:', c:['Legacy vulnerability','End-of-life vulnerability','Zero-day','Misconfiguration'], a:2, e:'A zero-day vulnerability is unknown to the vendor, meaning there has been zero days to develop a fix.'},
{obj:'2.3', q:'An attacker exploits a web form that fails to sanitize input, allowing execution of unauthorized database commands. This is:', c:['Cross-site scripting','SQL injection','Buffer overflow','Directory traversal'], a:1, e:'SQL injection occurs when unsanitized input allows an attacker to manipulate backend database queries.'},
{obj:'2.3', q:'An attacker injects a script into a comment field of a website that later executes in other visitors\' browsers. This is:', c:['SQL injection','Cross-site scripting (XSS)','Directory traversal','Buffer overflow'], a:1, e:'Cross-site scripting injects malicious scripts into trusted pages, which then execute in other users\' browsers.'},
{obj:'2.3', q:'A race condition vulnerability where a resource is validated, but then changes before it is actually used, is known by the acronym:', c:['TOU','TOC','TOCTOU','VM escape'], a:2, e:'Time-of-check to time-of-use (TOCTOU) describes the gap between validating and using a resource that attackers can exploit.'},

// ===== 2.4 Indicators of malicious activity (15 new) =====
{obj:'2.4', q:'Malware that encrypts a victim\'s files and demands payment for the decryption key is called:', c:['Spyware','Ransomware','Rootkit','Logic bomb'], a:1, e:'Ransomware encrypts victim data and demands payment, typically in cryptocurrency, for the decryption key.'},
{obj:'2.4', q:'Malicious code disguised as a legitimate, desirable program that users are tricked into installing is called a:', c:['Worm','Trojan','Virus','Bloatware'], a:1, e:'A Trojan disguises itself as legitimate software to trick users into installing it.'},
{obj:'2.4', q:'Malware that self-replicates and spreads across a network without requiring any user interaction is a:', c:['Virus','Worm','Trojan','Keylogger'], a:1, e:'A worm is self-propagating malware that spreads autonomously across networks, unlike a virus which needs a host file.'},
{obj:'2.4', q:'Malicious code that requires attaching itself to a host file and needs user action to spread is called a:', c:['Worm','Virus','Rootkit','Bloatware'], a:1, e:'A virus attaches to legitimate files and requires user action (like opening the file) to execute and spread.'},
{obj:'2.4', q:'Software that covertly monitors and reports a user\'s activity, such as browsing habits, back to a third party is:', c:['Spyware','Logic bomb','Bloatware','Rootkit'], a:0, e:'Spyware covertly gathers information about a user\'s activity without their knowledge or consent.'},
{obj:'2.4', q:'Malicious code designed to remain dormant until a specific condition or date is met, then trigger a damaging payload, is a:', c:['Logic bomb','Keylogger','Rootkit','Worm'], a:0, e:'A logic bomb lies dormant until triggered by a specific condition, such as a date or an event.'},
{obj:'2.4', q:'Malware that operates at the kernel level to hide its presence and maintain privileged, persistent access is a:', c:['Keylogger','Bloatware','Rootkit','Spyware'], a:2, e:'A rootkit embeds itself deep in the OS (often the kernel) to hide malicious activity and maintain access.'},
{obj:'2.4', q:'A physical attack in which an attacker copies the credentials from a contactless access badge to create a duplicate is:', c:['RFID cloning','Brute force','Environmental attack','Credential replay'], a:0, e:'RFID cloning duplicates the data from a contactless card or badge to create an unauthorized copy.'},
{obj:'2.4', q:'Deliberately manipulating a data center\'s HVAC or fire suppression systems to cause equipment damage is an example of a(n):', c:['Environmental attack','RFID cloning attack','On-path attack','Credential replay attack'], a:0, e:'Environmental attacks target the physical infrastructure (power, cooling, fire suppression) supporting IT systems.'},
{obj:'2.4', q:'An attacker positions themselves between two communicating parties to secretly intercept and possibly alter traffic. This is a(n):', c:['On-path attack','Replay attack','Downgrade attack','Collision attack'], a:0, e:'An on-path (man-in-the-middle) attack intercepts communication between two parties without their knowledge.'},
{obj:'2.4', q:'An attacker captures a valid login session token and reuses it later to impersonate the legitimate user. This is a:', c:['Downgrade attack','Credential replay attack','Birthday attack','Directory traversal attack'], a:1, e:'Credential/session replay attacks reuse captured authentication data to gain unauthorized access.'},
{obj:'2.4', q:'An application attack where a user manipulates input to gain higher-level permissions than intended is called:', c:['Privilege escalation','Forgery','Directory traversal','Injection'], a:0, e:'Privilege escalation exploits a flaw to gain elevated access rights beyond what was originally granted.'},
{obj:'2.4', q:'An attacker manipulates a file path input (e.g., using "../../") to access files outside the intended web root directory. This is:', c:['Directory traversal','Forgery','Privilege escalation','Buffer overflow'], a:0, e:'Directory traversal exploits improper input validation to access files outside the intended directory structure.'},
{obj:'2.4', q:'Two different input files producing the identical hash output represents which type of cryptographic attack?', c:['Downgrade attack','Collision attack','Birthday attack','Replay attack'], a:1, e:'A collision attack finds two different inputs that produce the same hash value, undermining hash integrity guarantees.'},
{obj:'2.4', q:'An indicator showing that the same user account is simultaneously logged in from two very different locations is called:', c:['Impossible travel','Concurrent session usage','Resource inaccessibility','Out-of-cycle logging'], a:1, e:'Concurrent session usage flags multiple simultaneous active sessions for a single account, a possible compromise sign.'},

// ===== 2.5 Mitigation techniques (15 new) =====
{obj:'2.5', q:'Restricting which applications are permitted to run on a system, blocking everything else by default, is called:', c:['Application allow listing','Segmentation','Isolation','Monitoring'], a:0, e:'Application allow listing permits only explicitly approved software to run, blocking all else by default.'},
{obj:'2.5', q:'Physically or logically separating a compromised or high-risk system from the rest of the network is called:', c:['Segmentation','Isolation','Patching','Decommissioning'], a:1, e:'Isolation removes a specific system from network access to contain a threat, distinct from broader segmentation.'},
{obj:'2.5', q:'Applying vendor-released updates to fix known security flaws in software is known as:', c:['Hardening','Patching','Monitoring','Configuration enforcement'], a:1, e:'Patching applies vendor updates that resolve known vulnerabilities in software or firmware.'},
{obj:'2.5', q:'Continuously ensuring that systems remain compliant with an approved secure baseline is called:', c:['Configuration enforcement','Decommissioning','Isolation','Least privilege'], a:0, e:'Configuration enforcement ensures systems consistently adhere to a defined, secure configuration baseline.'},
{obj:'2.5', q:'Properly retiring and removing a system from the network and inventory once it\'s no longer needed is called:', c:['Isolation','Decommissioning','Segmentation','Hardening'], a:1, e:'Decommissioning is the formal process of retiring a system, including data sanitization and removal from inventory.'},
{obj:'2.5', q:'Disabling unused network ports and protocols on a server is an example of which mitigation category?', c:['Access control','Hardening technique','Monitoring','Least privilege'], a:1, e:'Disabling unnecessary ports/protocols is a specific hardening technique that reduces the attack surface.'},
{obj:'2.5', q:'Installing an EDR agent on every endpoint to detect and respond to threats is best classified as a form of:', c:['Endpoint protection installation (hardening)','Segmentation','Least privilege','Isolation'], a:0, e:'Installing endpoint protection software is explicitly listed as a hardening technique to secure hosts.'},
{obj:'2.5', q:'Changing a router\'s default admin password immediately after deployment is a specific example of which hardening technique?', c:['Disabling ports/protocols','Default password changes','Removal of unnecessary software','Host-based firewall configuration'], a:1, e:'Changing default passwords is a fundamental and explicitly named hardening technique.'},
{obj:'2.5', q:'Uninstalling a preinstalled media player that is not needed on a production server reduces risk through which technique?', c:['Removal of unnecessary software','Host-based intrusion prevention','Encryption','Least privilege'], a:0, e:'Removing unneeded software reduces the attack surface by eliminating unused code that could be exploited.'},
{obj:'2.5', q:'A host-based intrusion prevention system (HIPS) primarily provides which mitigation function?', c:['Encrypting local files','Blocking malicious activity detected on that specific host','Enforcing least privilege','Managing certificate lifecycles'], a:1, e:'HIPS actively monitors and blocks malicious activity occurring on the individual host where it\'s installed.'},
{obj:'2.5', q:'Granting a database administrator access only to the specific databases they manage, rather than the entire server, reflects:', c:['Segmentation','Least privilege','Isolation','Monitoring'], a:1, e:'Least privilege limits access rights to only what is strictly necessary for a role\'s function.'},
{obj:'2.5', q:'Dividing a flat corporate network into separate VLANs for finance, HR, and guest traffic is an example of:', c:['Isolation','Segmentation','Decommissioning','Hardening'], a:1, e:'Segmentation divides a network into smaller zones to limit the spread of a compromise.'},
{obj:'2.5', q:'Continuously reviewing logs and alerts to detect potential threats in near real time is an example of which mitigation technique?', c:['Monitoring','Patching','Hardening','Isolation'], a:0, e:'Monitoring involves ongoing observation of systems and logs to detect and respond to potential threats.'},
{obj:'2.5', q:'Using an access control list (ACL) on a router to restrict which subnets can reach a sensitive server is an example of:', c:['Segmentation','Access control','Isolation','Hardening'], a:1, e:'Access control mechanisms like ACLs explicitly permit or deny traffic based on defined rules.'},
{obj:'2.5', q:'Which mitigation technique specifically addresses vulnerabilities by removing a system from service entirely rather than fixing it?', c:['Patching','Decommissioning','Hardening','Monitoring'], a:1, e:'Decommissioning eliminates the vulnerability entirely by retiring the system rather than remediating it in place.'},

// ===== 3.1 Architecture models (15 new) =====
{obj:'3.1', q:'In a SaaS cloud model, which security responsibilities typically remain with the customer?', c:['Physical hardware and hypervisor security','Data classification and access management','Operating system patching','Network infrastructure maintenance'], a:1, e:'Even in SaaS, the customer remains responsible for managing their own data, users, and access permissions.'},
{obj:'3.1', q:'Packaging an application with all its dependencies into a lightweight, portable unit that shares the host OS kernel is called:', c:['Virtualization','Containerization','Serverless computing','Infrastructure as code'], a:1, e:'Containerization packages an app and its dependencies together, sharing the host OS kernel rather than emulating hardware.'},
{obj:'3.1', q:'Running application code in response to events without provisioning or managing any underlying servers is called:', c:['Containerization','Serverless computing','Microservices','On-premises hosting'], a:1, e:'Serverless computing abstracts away server management entirely; the cloud provider runs code on demand.'},
{obj:'3.1', q:'Breaking a large application into small, independently deployable services that communicate over APIs is an architecture known as:', c:['Microservices','Containerization','Virtualization','High availability'], a:0, e:'A microservices architecture decomposes an application into small, independently deployable components.'},
{obj:'3.1', q:'Dividing a network logically using VLANs, without physically separating the cabling, is an example of:', c:['Physical isolation','Logical segmentation','Air-gapping','Software-defined networking'], a:1, e:'Logical segmentation separates traffic using configuration (like VLANs) rather than separate physical infrastructure.'},
{obj:'3.1', q:'A network architecture that separates the control plane from the data plane to allow centralized, programmatic network management is:', c:['Software-defined networking (SDN)','Physical isolation','Containerization','High availability'], a:0, e:'SDN decouples network control logic from the underlying hardware, enabling centralized programmable management.'},
{obj:'3.1', q:'A factory\'s system for monitoring and controlling robotic assembly equipment across multiple sites is best classified as a(n):', c:['RTOS','SCADA system','Embedded system only','Container'], a:1, e:'SCADA (Supervisory Control and Data Acquisition) systems monitor and control industrial processes, often across sites.'},
{obj:'3.1', q:'An operating system designed to guarantee that operations complete within a strict, predictable time frame is a(n):', c:['RTOS','SCADA system','Hypervisor','Container runtime'], a:0, e:'A Real-Time Operating System (RTOS) is designed for deterministic, time-critical processing.'},
{obj:'3.1', q:'A smart thermostat with limited processing power dedicated to a single specific function is an example of a(n):', c:['Embedded system','SCADA system','Microservice','Container'], a:0, e:'Embedded systems are purpose-built computing devices dedicated to a narrow, specific function.'},
{obj:'3.1', q:'Which architecture consideration refers to how easily a system can scale up capacity to meet growing demand?', c:['Scalability','Risk transference','Ease of recovery','Compute'], a:0, e:'Scalability measures how well a system can grow or shrink capacity in response to demand.'},
{obj:'3.1', q:'Purchasing cyber insurance to offset the financial impact of a potential breach reflects which architecture consideration?', c:['Risk transference','Resilience','Ease of deployment','Patch availability'], a:0, e:'Risk transference shifts financial risk to a third party, such as through an insurance policy.'},
{obj:'3.1', q:'A legacy embedded medical device that cannot receive security patches due to regulatory certification constraints illustrates which consideration?', c:['Ease of deployment','Inability to patch','Responsiveness','Scalability'], a:1, e:'Some systems, particularly regulated embedded devices, may be unable to receive patches due to certification requirements.'},
{obj:'3.1', q:'Designing infrastructure with redundant components so that a single failure does not cause an outage reflects which architecture goal?', c:['High availability','Scalability','Ease of deployment','Cost efficiency'], a:0, e:'High availability designs minimize downtime through redundancy and failover mechanisms.'},
{obj:'3.1', q:'A company decides to keep all IT infrastructure physically located and managed within its own facilities. This is described as:', c:['Cloud','On-premises','Hybrid','Containerized'], a:1, e:'On-premises infrastructure is hosted and managed within an organization\'s own physical facilities.'},
{obj:'3.1', q:'Which cloud consideration describes an organization\'s reliance on multiple external vendors for various cloud-hosted components?', c:['Third-party vendors','Responsibility matrix','Hybrid considerations','Risk transference'], a:0, e:'Reliance on multiple third-party vendors introduces additional dependencies and risk that must be managed.'},

// ===== 3.2 Secure enterprise infrastructure (15 new) =====
{obj:'3.2', q:'A server placed in a segmented zone specifically to provide administrators a secure, monitored path to manage internal systems is a:', c:['Load balancer','Jump server','Proxy server','Sensor'], a:1, e:'A jump server (jump box) is a hardened, monitored intermediary used to securely access other internal systems.'},
{obj:'3.2', q:'A device that distributes incoming traffic across multiple backend servers to improve availability and performance is a:', c:['Jump server','Load balancer','Proxy server','IDS'], a:1, e:'A load balancer distributes traffic across multiple servers to improve availability, performance, and redundancy.'},
{obj:'3.2', q:'Which network appliance is deployed inline and can actively block malicious traffic as it flows through the network?', c:['IDS','IPS','Passive sensor','Tap'], a:1, e:'An IPS is deployed inline and can actively block malicious traffic, unlike a passive IDS which only alerts.'},
{obj:'3.2', q:'A monitoring device connected via a network tap that observes traffic copies without being able to block anything is operating in which mode?', c:['Active','Passive','Inline','Fail-closed'], a:1, e:'Passive devices observe a copy of traffic (e.g., via a tap or mirror port) without being able to interfere with it.'},
{obj:'3.2', q:'A device that sits directly in the traffic path, able to inspect and potentially modify or block packets, is described as:', c:['Passive','Tap-based','Inline','Out-of-band'], a:2, e:'Inline devices sit directly in the traffic path, allowing them to actively act on the traffic they inspect.'},
{obj:'3.2', q:'Which secure protocol/access control combination is used with 802.1X to authenticate devices before granting network port access?', c:['EAP','SASE','SD-WAN','WAF'], a:0, e:'Extensible Authentication Protocol (EAP) is used alongside 802.1X for port-based network access control.'},
{obj:'3.2', q:'A firewall specifically designed to inspect and filter HTTP/HTTPS traffic to protect web applications from attacks like SQLi and XSS is a:', c:['UTM','WAF','NGFW only','Screened subnet'], a:1, e:'A Web Application Firewall (WAF) specifically targets attacks against web applications at the HTTP layer.'},
{obj:'3.2', q:'A firewall that inspects traffic based on the specific application generating it, not just the port number, is operating at which layer?', c:['Layer 2','Layer 3','Layer 4','Layer 7'], a:3, e:'Application-aware inspection occurs at Layer 7, examining the actual application-layer data.'},
{obj:'3.2', q:'A network zone positioned between the internet and the internal network, hosting public-facing services, is called a:', c:['Screened subnet (DMZ)','VPN concentrator','Jump server zone','SASE edge'], a:0, e:'A screened subnet (DMZ) isolates public-facing servers from the internal trusted network.'},
{obj:'3.2', q:'Establishing an encrypted tunnel over the public internet so a remote employee can securely access internal resources uses a:', c:['VPN','WAF','Load balancer','Jump server'], a:0, e:'A VPN creates an encrypted tunnel that protects remote access traffic traveling over an untrusted network.'},
{obj:'3.2', q:'Which secure protocol is most commonly used to establish the encrypted tunnel for a site-to-site VPN?', c:['SNMP','IPSec','SNMP traps','FTP'], a:1, e:'IPSec is a widely used protocol suite for authenticating and encrypting IP traffic in VPN tunnels.'},
{obj:'3.2', q:'A WAN architecture that intelligently routes traffic across multiple transport links (MPLS, broadband, LTE) based on real-time conditions is:', c:['SD-WAN','VPN','GRE','SASE only'], a:0, e:'SD-WAN dynamically manages and routes traffic across multiple WAN transport types for efficiency and resilience.'},
{obj:'3.2', q:'Placing a critical database server in a highly restricted network zone, separate from general user traffic, primarily addresses which infrastructure consideration?', c:['Device placement and security zones','Fail-open behavior','Port security','Load balancing'], a:0, e:'Careful device placement into appropriate security zones limits exposure of sensitive systems.'},
{obj:'3.2', q:'A firewall configured to allow all traffic through if it experiences a hardware failure is set to which failure mode?', c:['Fail-closed','Fail-open','Active mode','Inline mode'], a:1, e:'Fail-open devices default to allowing traffic on failure, prioritizing availability over security.'},
{obj:'3.2', q:'Which control specifically restricts which physical switch ports can be used, often tied to 802.1X authentication?', c:['Port security','Load balancing','Screened subnet','SASE'], a:0, e:'Port security restricts and authenticates which devices are permitted to connect to specific physical switch ports.'},

// ===== 3.3 Protect data (15 new) =====
{obj:'3.3', q:'A company\'s proprietary manufacturing process, kept confidential to maintain competitive advantage, is classified as:', c:['Regulated data','Trade secret','Legal information','Public data'], a:1, e:'Trade secrets are proprietary information that provides a competitive advantage and is protected through confidentiality.'},
{obj:'3.3', q:'Health records subject to HIPAA requirements are best classified under which data type?', c:['Trade secret','Regulated data','Intellectual property','Public data'], a:1, e:'Regulated data is subject to specific legal or industry requirements, such as HIPAA for health records.'},
{obj:'3.3', q:'A patented invention or copyrighted software code is best classified as which data type?', c:['Intellectual property','Regulated data','Financial information','Legal information'], a:0, e:'Intellectual property includes patents, copyrights, and trademarks protecting original creations.'},
{obj:'3.3', q:'Data marked for internal use only, where disclosure would cause moderate harm but isn\'t highly sensitive, is typically classified as:', c:['Public','Sensitive','Critical','Restricted'], a:1, e:'Sensitive data classification indicates information requiring protection, though not at the highest severity level.'},
{obj:'3.3', q:'Data whose unauthorized disclosure would cause severe, potentially catastrophic harm to an organization is typically classified as:', c:['Public','Sensitive','Critical','Confidential'], a:2, e:'Critical data classification is reserved for information whose compromise would have the most severe impact.'},
{obj:'3.3', q:'A press release intended for open, unrestricted distribution is classified as which data classification?', c:['Public','Private','Restricted','Confidential'], a:0, e:'Public data classification applies to information intended for unrestricted, open distribution.'},
{obj:'3.3', q:'An email being transmitted from a client\'s browser to a web server over HTTPS is data in which state?', c:['Data at rest','Data in transit','Data in use','Data in escrow'], a:1, e:'Data actively moving across a network is considered data in transit and should be protected with encryption like TLS.'},
{obj:'3.3', q:'A legal requirement that a country\'s citizen data must be processed and stored only within that country\'s borders reflects:', c:['Data sovereignty','Data classification','Geolocation','Permission restrictions'], a:0, e:'Data sovereignty refers to legal requirements tying data to the jurisdiction where it is stored or processed.'},
{obj:'3.3', q:'Using a device\'s physical location to restrict which users can access certain sensitive data is an application of:', c:['Data sovereignty','Geolocation','Data masking','Segmentation'], a:1, e:'Geolocation-based restrictions use a user or device\'s physical location as an access control factor.'},
{obj:'3.3', q:'Blocking access to a cloud application entirely from certain countries is an example of which method to secure data?', c:['Geographic restrictions','Tokenization','Obfuscation','Permission restrictions'], a:0, e:'Geographic restrictions explicitly block or allow access to data/services based on physical location.'},
{obj:'3.3', q:'Configuring file share permissions so only the finance team can read payroll spreadsheets is an example of:', c:['Permission restrictions','Tokenization','Data masking','Geographic restrictions'], a:0, e:'Permission restrictions control which specific users or groups can access particular data.'},
{obj:'3.3', q:'Applying a one-way cryptographic function to data so it cannot be reversed back to its original form is called:', c:['Encryption','Hashing','Tokenization','Masking'], a:1, e:'Hashing is a one-way function; unlike encryption, hashed data cannot be decrypted back to its original value.'},
{obj:'3.3', q:'Which method to secure data specifically replaces sensitive values with a non-sensitive substitute stored in a secure vault for later retrieval?', c:['Hashing','Tokenization','Segmentation','Geographic restriction'], a:1, e:'Tokenization is reversible via a secure lookup vault, unlike hashing which is a one-way transformation.'},
{obj:'3.3', q:'Data currently loaded into a server\'s RAM and being actively processed by an application is in which state?', c:['Data at rest','Data in transit','Data in use','Data in storage'], a:2, e:'Data in use refers to information actively being processed in memory, which requires protections like encrypted enclaves.'},
{obj:'3.3', q:'Financial statements audited for regulatory reporting purposes fall under which data type?', c:['Financial information','Legal information','Trade secret','Human-readable data'], a:0, e:'Financial information is a distinct data type covering monetary records, statements, and reports.'},

// ===== 3.4 Resilience and recovery (15 new) =====
{obj:'3.4', q:'An alternate site with basic power and connectivity, but no pre-installed equipment, requiring significant setup time to become operational, is a:', c:['Hot site','Warm site','Cold site','Geographically dispersed site'], a:2, e:'A cold site provides only basic infrastructure and requires substantial time and effort to become operational.'},
{obj:'3.4', q:'Locating backup data centers in geographically distant regions to reduce the risk of a single regional disaster affecting both is called:', c:['Geographic dispersion','Platform diversity','Capacity planning','Parallel processing'], a:0, e:'Geographic dispersion spreads infrastructure across distant locations to reduce correlated disaster risk.'},
{obj:'3.4', q:'Deliberately using different vendors or technology stacks for redundant systems, so a single vulnerability can\'t compromise both, is called:', c:['Platform diversity','Geographic dispersion','Multi-cloud systems','High availability'], a:0, e:'Platform diversity reduces the risk that a single flaw or vulnerability could compromise all redundant systems at once.'},
{obj:'3.4', q:'Distributing workloads across two or more different cloud providers to avoid vendor lock-in and improve resilience is called:', c:['Platform diversity','Multi-cloud systems','Geographic dispersion','Capacity planning'], a:1, e:'Multi-cloud systems intentionally use more than one cloud provider to increase resilience and avoid reliance on one vendor.'},
{obj:'3.4', q:'Planning ahead for the staffing, technology, and infrastructure needed to sustain operations during peak demand is called:', c:['Capacity planning','Continuity of operations','High availability','Platform diversity'], a:0, e:'Capacity planning ensures adequate people, technology, and infrastructure resources are available to meet demand.'},
{obj:'3.4', q:'The overarching plan and set of procedures ensuring an organization can continue essential functions during a disruption is:', c:['Capacity planning','Continuity of operations','Platform diversity','Journaling'], a:1, e:'Continuity of operations planning ensures essential business functions can continue through a disruptive event.'},
{obj:'3.4', q:'Deliberately triggering a failover to the backup system during a controlled test, to verify it works as expected, is called a:', c:['Tabletop exercise','Simulation','Fail over test','Parallel processing test'], a:2, e:'A fail-over test actually triggers the switch to backup systems to validate the process works correctly.'},
{obj:'3.4', q:'Running the primary and backup systems simultaneously and comparing their outputs, without disrupting the live environment, is called:', c:['Fail over','Parallel processing','Simulation','Tabletop exercise'], a:1, e:'Parallel processing tests run backup systems alongside production to validate results without any live disruption.'},
{obj:'3.4', q:'A discussion-based test where team members talk through their responses to a hypothetical scenario, without touching real systems, is a:', c:['Simulation','Tabletop exercise','Fail over test','Parallel processing test'], a:1, e:'Tabletop exercises are discussion-based walkthroughs of a response plan, without any live system impact.'},
{obj:'3.4', q:'Recreating a realistic incident scenario in a controlled environment, requiring the team to actively respond as they would in a real event, is a:', c:['Tabletop exercise','Simulation','Fail over test','Onsite backup test'], a:1, e:'A simulation actively recreates a scenario requiring hands-on response, going further than a discussion-based tabletop.'},
{obj:'3.4', q:'Storing backups at a separate physical location from the production systems they protect is referred to as:', c:['Onsite backup','Offsite backup','Snapshot backup','Journaled backup'], a:1, e:'Offsite backups are stored away from the primary site, protecting against site-wide disasters.'},
{obj:'3.4', q:'Continuously recording every transaction or change made to a database, allowing precise point-in-time recovery, is called:', c:['Snapshotting','Journaling','Replication','Frequency-based backup'], a:1, e:'Journaling logs every change sequentially, enabling recovery to a very precise point in time.'},
{obj:'3.4', q:'Continuously copying data changes from a primary system to a secondary system in near real time is called:', c:['Replication','Journaling','Snapshotting','Parallel processing'], a:0, e:'Replication continuously copies data to a secondary system, keeping it synchronized for rapid failover.'},
{obj:'3.4', q:'A battery backup device that provides short-term power during an outage, primarily to allow for graceful shutdown, is a(n):', c:['Generator','UPS','Redundant power supply','Load balancer'], a:1, e:'An uninterruptible power supply (UPS) provides short-term battery backup power, typically for graceful shutdown or bridging to a generator.'},
{obj:'3.4', q:'A diesel-powered backup system designed to sustain power for extended outages, beyond what a battery could provide, is a:', c:['UPS','Generator','Redundant PSU','Load balancer'], a:1, e:'Generators provide long-duration backup power, unlike a UPS which is meant for short-term bridging.'},

// ===== 4.1 Security techniques for computing resources (15 new) =====
{obj:'4.1', q:'Establishing a documented, secure starting-point configuration for new systems before deployment is called:', c:['Establishing a secure baseline','Hardening targets','Sandboxing','Configuration enforcement'], a:0, e:'Establishing a secure baseline defines the approved starting configuration that all similar systems should follow.'},
{obj:'4.1', q:'Continuously verifying that deployed systems have not drifted from their approved secure baseline is called:', c:['Establishing a baseline','Deploying a baseline','Maintaining a baseline','Hardening a baseline'], a:2, e:'Maintaining a baseline involves ongoing verification that systems remain compliant with the approved configuration.'},
{obj:'4.1', q:'Conducting a physical walkthrough to measure Wi-Fi signal strength and identify optimal access point placement is called a:', c:['Heat map','Site survey','Wireless penetration test','Sensor deployment'], a:1, e:'A site survey physically assesses a location to plan wireless coverage and access point placement.'},
{obj:'4.1', q:'A visual representation showing wireless signal strength across a floor plan, used to plan access point coverage, is called a:', c:['Site survey','Heat map','Deployment model','Connection method assessment'], a:1, e:'A heat map visually displays signal strength data collected during a wireless site survey.'},
{obj:'4.1', q:'A mobile deployment model where the organization owns the device but allows the employee to also use it personally is:', c:['BYOD','COPE','CYOD','MDM'], a:1, e:'Corporate-Owned, Personally Enabled (COPE) means the company owns the device but permits personal use.'},
{obj:'4.1', q:'A mobile deployment model where employees select a device from a pre-approved company list, but the company retains ownership, is:', c:['BYOD','COPE','CYOD','MDM'], a:2, e:'Choose Your Own Device (CYOD) lets employees pick from an approved list while the company typically retains ownership.'},
{obj:'4.1', q:'The software platform used to enforce security policies, push configurations, and remotely wipe managed mobile devices is:', c:['MDM','UEM only','SIEM','NAC'], a:0, e:'Mobile Device Management (MDM) software enforces policy and security configurations on managed mobile devices.'},
{obj:'4.1', q:'A mobile device connects to a corporate network using a cellular data plan rather than Wi-Fi. This is an example of which connection method?', c:['Bluetooth','Wi-Fi','Cellular','NFC'], a:2, e:'Cellular connectivity uses the mobile carrier network rather than local wireless infrastructure.'},
{obj:'4.1', q:'Which wireless security setting is the current recommended standard, offering the strongest available protection for Wi-Fi networks?', c:['WEP','WPA','WPA2','WPA3'], a:3, e:'WPA3 is the current strongest standard, improving on WPA2 with stronger encryption and offline attack resistance.'},
{obj:'4.1', q:'Configuring wireless clients to authenticate against a centralized RADIUS server, rather than a shared passphrase, reflects which practice?', c:['Pre-shared key authentication','AAA/RADIUS-based authentication','WPS-based pairing','Bluetooth pairing'], a:1, e:'Enterprise wireless authentication uses AAA/RADIUS for centralized, per-user authentication rather than a shared key.'},
{obj:'4.1', q:'Checking that user-submitted web form data matches expected formats before processing it server-side is called:', c:['Input validation','Secure cookies','Static code analysis','Code signing'], a:0, e:'Input validation checks and sanitizes data before use to prevent injection and other input-based attacks.'},
{obj:'4.1', q:'Setting the "Secure" and "HttpOnly" flags on a browser cookie is an example of which application security practice?', c:['Input validation','Secure cookies','Static code analysis','Sandboxing'], a:1, e:'Secure cookie attributes restrict how and when cookies can be transmitted or accessed, reducing exposure.'},
{obj:'4.1', q:'Reviewing an application\'s source code for security flaws without actually executing the program is called:', c:['Dynamic analysis','Static code analysis','Sandboxing','Code signing'], a:1, e:'Static code analysis examines source code for vulnerabilities without running the application.'},
{obj:'4.1', q:'Cryptographically signing an application\'s executable so users can verify it hasn\'t been tampered with since publication is called:', c:['Code signing','Static analysis','Input validation','Secure cookies'], a:0, e:'Code signing uses a digital signature to verify software integrity and authenticate its publisher.'},
{obj:'4.1', q:'Executing a suspicious email attachment in an isolated virtual environment to observe its behavior safely is an example of:', c:['Sandboxing','Code signing','Input validation','Static analysis'], a:0, e:'Sandboxing isolates and executes untrusted content in a contained environment to observe behavior without risking the host.'},

// ===== 4.2 Asset management (15 new) =====
{obj:'4.2', q:'Formally evaluating and purchasing new hardware through an approved vendor process is part of which asset management stage?', c:['Acquisition/procurement','Assignment/accounting','Monitoring/asset tracking','Disposal/decommissioning'], a:0, e:'Acquisition/procurement covers the formal process of evaluating, approving, and purchasing new assets.'},
{obj:'4.2', q:'Recording which employee a specific laptop has been issued to is part of which asset management stage?', c:['Acquisition/procurement','Assignment/accounting','Monitoring/asset tracking','Disposal/decommissioning'], a:1, e:'Assignment/accounting tracks ownership and responsibility for specific assets once acquired.'},
{obj:'4.2', q:'Continuously scanning the network to maintain an up-to-date inventory of all connected devices is part of which asset management stage?', c:['Acquisition/procurement','Assignment/accounting','Monitoring/asset tracking','Disposal/decommissioning'], a:2, e:'Monitoring/asset tracking involves ongoing discovery and inventory of assets connected to the environment.'},
{obj:'4.2', q:'Assigning a data classification level (e.g., confidential, public) to a newly acquired asset is part of:', c:['Acquisition/procurement','Assignment/accounting','Disposal/decommissioning','Monitoring only'], a:1, e:'Classification of an asset\'s data sensitivity is documented as part of the assignment/accounting stage.'},
{obj:'4.2', q:'Using a strong magnetic field to permanently erase data from a hard drive is a specific method of:', c:['Data retention','Certification','Sanitization','Assignment'], a:2, e:'Degaussing is a sanitization technique that uses magnetic fields to erase data from magnetic storage media.'},
{obj:'4.2', q:'Physically shredding a decommissioned hard drive so its data can never be recovered is an example of:', c:['Sanitization','Destruction','Certification','Data retention'], a:1, e:'Destruction physically damages media beyond any possibility of data recovery, such as through shredding.'},
{obj:'4.2', q:'Receiving formal documentation proving that a vendor properly wiped all data from returned leased equipment is called:', c:['Sanitization','Destruction','Certification','Data retention'], a:2, e:'Certification provides documented proof that proper sanitization or destruction procedures were followed.'},
{obj:'4.2', q:'A policy requiring financial records to be kept for seven years before deletion is governed by which asset management concept?', c:['Data retention','Sanitization','Certification','Enumeration'], a:0, e:'Data retention policies define how long specific data types must be kept before disposal.'},
{obj:'4.2', q:'Actively probing the network to discover and catalog every device, including previously unknown ones, is called:', c:['Enumeration','Classification','Ownership','Procurement'], a:0, e:'Enumeration is the active process of discovering and cataloging assets connected to a network.'},
{obj:'4.2', q:'Wiping and overwriting a solid-state drive multiple times, though less reliable than on traditional HDDs, is an attempt at:', c:['Destruction','Sanitization','Certification','Retention'], a:1, e:'Overwriting attempts to sanitize storage media, though SSDs require different techniques than magnetic drives due to wear leveling.'},
{obj:'4.2', q:'Which of the following best describes why proper asset disposal matters from a security standpoint?', c:['It reduces procurement costs','It prevents recovery of sensitive data from retired equipment','It speeds up the acquisition process','It replaces the need for a data classification policy'], a:1, e:'Proper disposal (sanitization/destruction) prevents sensitive data from being recovered from retired equipment.'},
{obj:'4.2', q:'Tracking software license counts to ensure compliance with vendor agreements is part of which asset management activity?', c:['Monitoring/asset tracking','Disposal/decommissioning','Certification','Data retention'], a:0, e:'Monitoring/asset tracking includes managing software assets like license compliance, not just hardware.'},
{obj:'4.2', q:'Which stage of asset management directly addresses the risk of sensitive data lingering on equipment sold on the secondary market?', c:['Acquisition/procurement','Assignment/accounting','Disposal/decommissioning','Monitoring'], a:2, e:'Disposal/decommissioning specifically addresses sanitizing or destroying data before an asset leaves organizational control.'},
{obj:'4.2', q:'A company designates a specific manager accountable for every laptop issued in their department. This reflects which concept?', c:['Ownership','Enumeration','Certification','Retention'], a:0, e:'Ownership assigns accountability for a specific asset to a specific individual or role.'},
{obj:'4.2', q:'Which of these would most directly reduce the risk of "ghost assets" (devices no longer in use but still listed as active)?', c:['Regular monitoring and asset tracking','A stronger procurement policy','Longer data retention periods','Faster device acquisition'], a:0, e:'Ongoing monitoring and tracking helps identify assets that are no longer active or accounted for.'},

// ===== 4.3 Vulnerability management (15 new) =====
{obj:'4.3', q:'An automated tool that scans systems and reports known vulnerabilities based on version and configuration data is called a:', c:['Penetration test','Vulnerability scanner','SIEM','SOAR platform'], a:1, e:'A vulnerability scanner automatically identifies known weaknesses by checking software versions and configurations.'},
{obj:'4.3', q:'Reviewing application source code for flaws while the application is actively running is called:', c:['Static analysis','Dynamic analysis','Package monitoring','System audit'], a:1, e:'Dynamic analysis tests a running application to identify vulnerabilities during actual execution.'},
{obj:'4.3', q:'Continuously tracking third-party libraries and dependencies used in an application for newly disclosed vulnerabilities is called:', c:['Static analysis','Dynamic analysis','Package monitoring','Penetration testing'], a:2, e:'Package monitoring tracks dependencies for newly disclosed vulnerabilities affecting third-party components.'},
{obj:'4.3', q:'Actively simulating a real-world attack against a system, with authorization, to identify exploitable weaknesses is called:', c:['Vulnerability scanning','Penetration testing','Package monitoring','System audit'], a:1, e:'Penetration testing actively attempts to exploit vulnerabilities, going beyond passive scanning.'},
{obj:'4.3', q:'Gathering threat data from underground forums and marketplaces to anticipate emerging attacks is an example of which threat feed source?', c:['Open-source intelligence','Dark web monitoring','Proprietary/third-party feed','Information-sharing organization'], a:1, e:'Dark web monitoring specifically gathers intelligence from underground, non-indexed forums and marketplaces.'},
{obj:'4.3', q:'A commercial vendor-provided feed of curated threat indicators, available by subscription, is an example of:', c:['Open-source intelligence','Dark web monitoring','Proprietary/third-party threat feed','System/process audit'], a:2, e:'Proprietary/third-party threat feeds are paid, vendor-curated sources of threat intelligence.'},
{obj:'4.3', q:'A formal program that rewards independent researchers for responsibly reporting discovered vulnerabilities is called a:', c:['Bug bounty program','Threat feed','Package monitoring program','System audit'], a:0, e:'A bug bounty program incentivizes external researchers to responsibly disclose vulnerabilities in exchange for rewards.'},
{obj:'4.3', q:'A structured internal review of processes and controls, conducted to verify compliance and effectiveness, is called a:', c:['System/process audit','Bug bounty program','Threat feed','Dynamic analysis'], a:0, e:'A system/process audit formally reviews internal processes and controls for compliance and effectiveness.'},
{obj:'4.3', q:'A vulnerability scan reports a critical flaw that, upon investigation, does not actually exist on the system. This is a:', c:['True positive','False positive','False negative','True negative'], a:1, e:'A false positive incorrectly flags a vulnerability that isn\'t actually present.'},
{obj:'4.3', q:'A vulnerability scan fails to detect a real, exploitable flaw that is later discovered through a manual test. This is a:', c:['True positive','False positive','False negative','True negative'], a:2, e:'A false negative fails to detect a vulnerability that genuinely exists, which is more dangerous than a false positive.'},
{obj:'4.3', q:'Which factor in vulnerability analysis measures the percentage of an asset\'s value that would be lost if a specific threat were realized?', c:['Exposure factor','Environmental variables','Industry/organizational impact','Risk tolerance'], a:0, e:'Exposure factor represents the proportion of asset value that would be lost due to a specific threat event.'},
{obj:'4.3', q:'Adjusting a vulnerability\'s priority based on factors unique to an organization\'s specific environment (like compensating controls already in place) reflects:', c:['Environmental variables','Exposure factor','CVSS base score only','Risk tolerance'], a:0, e:'Environmental variables in CVSS scoring allow adjustment based on the specific organizational context.'},
{obj:'4.3', q:'An organization decides to accept a low-severity vulnerability rather than remediate it, given limited resources. This reflects the organization\'s:', c:['Risk tolerance','Exposure factor','Environmental variables','Vulnerability classification'], a:0, e:'Risk tolerance reflects how much risk an organization is willing to accept before acting.'},
{obj:'4.3', q:'After patching a critical vulnerability, an analyst reruns the vulnerability scanner against the affected system. This step is called:', c:['Prioritization','Rescanning','Confirmation','Exposure analysis'], a:1, e:'Rescanning validates that a remediation was successful and the vulnerability no longer exists.'},
{obj:'4.3', q:'Which vulnerability response strategy involves purchasing coverage to offset the financial impact of a vulnerability being exploited?', c:['Patching','Segmentation','Insurance','Compensating controls'], a:2, e:'Insurance is a risk response strategy that offsets financial impact rather than directly remediating the flaw.'},

// ===== 4.4 Alerting and monitoring (15 new) =====
{obj:'4.4', q:'Collecting log data from many different systems into a single centralized repository for analysis is called:', c:['Log aggregation','Alerting','Scanning','Archiving'], a:0, e:'Log aggregation centralizes logs from multiple sources to enable unified analysis and correlation.'},
{obj:'4.4', q:'Automatically notifying an analyst when a defined suspicious condition is detected in monitored data is called:', c:['Log aggregation','Alerting','Archiving','Reporting'], a:1, e:'Alerting generates notifications when monitoring tools detect conditions that meet defined criteria.'},
{obj:'4.4', q:'Retaining historical logs in long-term, often lower-cost storage for future reference or compliance is called:', c:['Log aggregation','Alerting','Archiving','Scanning'], a:2, e:'Archiving preserves historical logs for compliance, investigation, or future reference.'},
{obj:'4.4', q:'Temporarily isolating a device flagged by monitoring tools to prevent further spread while it is investigated is called:', c:['Alert tuning','Quarantine','Log aggregation','Benchmarking'], a:1, e:'Quarantine isolates a suspected compromised device from the rest of the network pending investigation.'},
{obj:'4.4', q:'Adjusting detection thresholds and rules to reduce excessive false-positive alerts is called:', c:['Quarantine','Alert tuning','Archiving','Scanning'], a:1, e:'Alert tuning refines detection rules so alerts are more accurate and actionable, reducing noise.'},
{obj:'4.4', q:'A monitoring tool that requires software installed directly on each monitored system to collect data is using which collection method?', c:['Agentless','Agent-based','SNMP-only','NetFlow-only'], a:1, e:'Agent-based monitoring requires software installed on each host to collect and forward telemetry.'},
{obj:'4.4', q:'A monitoring approach that collects data remotely without installing any software on the target system is called:', c:['Agent-based','Agentless','Benchmark-based','SCAP-based'], a:1, e:'Agentless monitoring gathers data remotely (e.g., via APIs or protocols) without installing local software.'},
{obj:'4.4', q:'A defined, standardized configuration baseline used to measure whether systems meet a minimum security standard is called a:', c:['Benchmark','SCAP profile only','SNMP trap','NetFlow record'], a:0, e:'A benchmark is a defined standard configuration used to evaluate whether systems meet security requirements.'},
{obj:'4.4', q:'A network monitoring protocol that summarizes traffic flow data (source, destination, volume) rather than full packet content is:', c:['SNMP','NetFlow','SCAP','PCAP'], a:1, e:'NetFlow collects summarized traffic flow statistics, useful for traffic analysis without full packet capture.'},
{obj:'4.4', q:'A network device sends an unsolicited alert message to a management system when a specific threshold is crossed. This is an example of:', c:['An SNMP trap','A NetFlow record','A SCAP benchmark','A PCAP file'], a:0, e:'SNMP traps are unsolicited alert messages sent by devices when a monitored condition is triggered.'},
{obj:'4.4', q:'Software that detects and blocks known malware signatures on an endpoint is best described as:', c:['DLP','Antivirus','SIEM','NetFlow'], a:1, e:'Antivirus software detects and blocks malware, typically using signature and heuristic-based detection.'},
{obj:'4.4', q:'A tool that monitors outbound data transfers and blocks attempts to exfiltrate sensitive information is:', c:['DLP','Antivirus','SNMP','SCAP'], a:0, e:'Data Loss Prevention (DLP) tools detect and block unauthorized transfer of sensitive data.'},
{obj:'4.4', q:'Which activity involves periodically probing systems and networks to actively identify weaknesses, as opposed to passively monitoring?', c:['Scanning','Archiving','Log aggregation','Alerting'], a:0, e:'Scanning actively probes systems to identify vulnerabilities or configuration issues.'},
{obj:'4.4', q:'Summarizing monitoring findings into a formal document for management review is an example of which monitoring activity?', c:['Reporting','Archiving','Alerting','Quarantine'], a:0, e:'Reporting compiles and communicates monitoring findings to stakeholders, typically for review or compliance.'},
{obj:'4.4', q:'Which SCAP-related concept defines the automated checks and standards used to evaluate configuration compliance?', c:['Benchmarks','NetFlow','SNMP traps','Antivirus signatures'], a:0, e:'Benchmarks under SCAP define the standardized configuration checks used to automate compliance evaluation.'},

// ===== 4.5 Enterprise capabilities (15 new) =====
{obj:'4.5', q:'Configuring a firewall to explicitly permit only specific known-good traffic while denying everything else by default reflects which firewall concept?', c:['Rules','Screened subnets','Access lists only','Ports/protocols only'], a:0, e:'Firewall rules define the specific conditions under which traffic is permitted or denied.'},
{obj:'4.5', q:'Restricting a firewall to only allow traffic on ports 443 and 80, blocking all others, is an example of managing which firewall component?', c:['Access lists','Ports/protocols','Screened subnets','Rules only, unrelated to ports'], a:1, e:'Managing which ports/protocols are permitted is a specific, named firewall configuration component.'},
{obj:'4.5', q:'A web filtering deployment where filtering software is installed directly on each endpoint is called:', c:['Centralized proxy','Agent-based','URL scanning only','Content categorization only'], a:1, e:'Agent-based web filtering installs software directly on endpoints to enforce policy regardless of network location.'},
{obj:'4.5', q:'Routing all outbound web traffic through a single central appliance to enforce consistent filtering policy is called:', c:['Agent-based filtering','Centralized proxy','Block rules only','Reputation filtering only'], a:1, e:'A centralized proxy routes traffic through one enforcement point rather than relying on per-device agents.'},
{obj:'4.5', q:'Blocking access to websites based on their assigned category, such as "gambling" or "social media," is called:', c:['URL scanning','Content categorization','Block rules','Reputation filtering'], a:1, e:'Content categorization classifies websites into categories, which policies can then allow or block.'},
{obj:'4.5', q:'Denying access to a specific website purely because it has a known history of hosting malware is based on:', c:['Content categorization','Reputation','Block rules only, unrelated to history','URL scanning only'], a:1, e:'Reputation-based filtering blocks sites based on their known history or risk score, not just their category.'},
{obj:'4.5', q:'Actively examining a URL\'s destination content in real time to detect malicious code before allowing access is called:', c:['URL scanning','Content categorization','Reputation filtering','Block rules'], a:0, e:'URL scanning actively inspects the destination content of a link before allowing a user to access it.'},
{obj:'4.5', q:'An email security control that publishes which mail servers are authorized to send on behalf of a domain is:', c:['DKIM','SPF','DMARC','A secure gateway'], a:1, e:'SPF (Sender Policy Framework) publishes a DNS record listing authorized sending servers for a domain.'},
{obj:'4.5', q:'An email security control that cryptographically signs outgoing messages so recipients can verify they weren\'t altered in transit is:', c:['SPF','DKIM','DMARC','A secure gateway'], a:1, e:'DKIM adds a digital signature to outgoing email, allowing receivers to verify integrity and origin.'},
{obj:'4.5', q:'An email security policy that tells receiving servers what action to take when SPF or DKIM checks fail is:', c:['SPF','DKIM','DMARC','A secure gateway'], a:2, e:'DMARC builds on SPF and DKIM by defining the policy action (reject, quarantine, none) when checks fail.'},
{obj:'4.5', q:'A dedicated appliance or service that filters inbound and outbound email for spam, malware, and policy violations is called an email:', c:['Gateway','DMARC record','SPF record','DKIM signature'], a:0, e:'An email security gateway inspects and filters mail traffic before it reaches or leaves the organization.'},
{obj:'4.5', q:'A tool that continuously monitors critical system files for unauthorized changes, alerting when a hash mismatch occurs, is:', c:['DLP','File integrity monitoring','NAC','UEBA'], a:1, e:'File integrity monitoring (FIM) detects unauthorized changes to files by comparing them against known-good baselines.'},
{obj:'4.5', q:'A tool that establishes a behavioral baseline for each user and flags significant deviations as potential threats is:', c:['NAC','User behavior analytics','DLP','FIM'], a:1, e:'User (and entity) behavior analytics baselines normal activity patterns and flags anomalies that may indicate compromise.'},
{obj:'4.5', q:'A capability that correlates telemetry across endpoints, network, and cloud into a single detection and response platform is:', c:['EDR','XDR','NAC','SWG'], a:1, e:'XDR (Extended Detection and Response) expands beyond endpoints to correlate data across multiple layers.'},
{obj:'4.5', q:'Which capability specifically enforces that a device meets minimum security requirements (patch level, AV status) before granting network access?', c:['EDR','NAC','DLP','FIM'], a:1, e:'Network Access Control (NAC) evaluates device posture/policy compliance before allowing network access.'},

// ===== 4.6 Identity and access management (15 new) =====
{obj:'4.6', q:'An access control model where the resource owner personally decides who else can access their file is called:', c:['Mandatory Access Control','Discretionary Access Control','Role-based Access Control','Rule-based Access Control'], a:1, e:'Discretionary Access Control (DAC) lets the resource owner determine and grant access at their discretion.'},
{obj:'4.6', q:'An access control model where access is determined by a central authority using data sensitivity labels, not the resource owner, is:', c:['Discretionary Access Control','Mandatory Access Control','Attribute-based Access Control','Rule-based Access Control'], a:1, e:'Mandatory Access Control (MAC) is enforced by a central authority using classification labels, removing owner discretion.'},
{obj:'4.6', q:'An access control model that evaluates multiple attributes — such as department, device type, and time of day — together to make a decision is:', c:['Role-based Access Control','Rule-based Access Control','Attribute-based Access Control','Mandatory Access Control'], a:2, e:'Attribute-Based Access Control (ABAC) considers multiple contextual attributes together to make access decisions.'},
{obj:'4.6', q:'Restricting login attempts to a sensitive system to business hours only (8am-6pm) is an example of:', c:['Least privilege','Time-of-day restrictions','Rule-based access control only, unrelated to time','Federation'], a:1, e:'Time-of-day restrictions limit when access is permitted, regardless of the underlying access model.'},
{obj:'4.6', q:'Verifying a new employee\'s government-issued ID and background before granting them a digital identity is part of:', c:['Identity proofing','Federation','Attestation','Interoperability'], a:0, e:'Identity proofing verifies a person\'s real-world identity before issuing them credentials or access.'},
{obj:'4.6', q:'Allowing a user to log into a partner organization\'s application using their existing corporate identity is enabled through:', c:['Federation','Identity proofing','Attestation','Time-of-day restrictions'], a:0, e:'Federation allows identities to be trusted and used across separate, independently managed organizations.'},
{obj:'4.6', q:'A formal statement confirming that a system or control meets a specific security requirement is called:', c:['Federation','Attestation','Interoperability','Identity proofing'], a:1, e:'Attestation is a formal declaration or proof that a requirement or control has been met.'},
{obj:'4.6', q:'The ability of different identity systems from different vendors to work together seamlessly is referred to as:', c:['Federation','Attestation','Interoperability','Provisioning'], a:2, e:'Interoperability describes the ability of different systems and vendors to work together effectively.'},
{obj:'4.6', q:'Automatically creating a new employee\'s accounts across multiple systems on their first day is called:', c:['De-provisioning','Provisioning','Attestation','Federation'], a:1, e:'Provisioning is the process of creating and setting up user accounts and access when a user joins.'},
{obj:'4.6', q:'Promptly disabling a departed employee\'s accounts across all systems is called:', c:['Provisioning','De-provisioning','Federation','Identity proofing'], a:1, e:'De-provisioning removes or disables access when a user leaves or no longer needs it, reducing standing risk.'},
{obj:'4.6', q:'A fingerprint scan used to unlock a laptop is an example of which MFA factor category?', c:['Something you know','Something you have','Something you are','Somewhere you are'], a:2, e:'Biometrics like fingerprints fall under "something you are," an inherence-based authentication factor.'},
{obj:'4.6', q:'A hardware token that generates a rotating six-digit code every 30 seconds is an example of which MFA factor category?', c:['Something you know','Something you have','Something you are','Somewhere you are'], a:1, e:'A physical hardware token represents "something you have," a possession-based authentication factor.'},
{obj:'4.6', q:'Restricting login only when a user\'s device is within a specific geofenced office location is an example of which MFA factor category?', c:['Something you know','Something you have','Something you are','Somewhere you are'], a:3, e:'Location-based restrictions represent the "somewhere you are" authentication factor.'},
{obj:'4.6', q:'A policy requiring passwords to be changed every 90 days addresses which password concept?', c:['Complexity','Reuse','Expiration','Length'], a:2, e:'Password expiration policies define how frequently a password must be changed.'},
{obj:'4.6', q:'A tool that securely stores and rotates privileged account credentials, releasing them only when authorized, is called:', c:['Just-in-time permissions','Password vaulting','Ephemeral credentials','Federation'], a:1, e:'Password vaulting securely stores privileged credentials and controls when and how they are released.'},

// ===== 4.7 Automation and orchestration (15 new) =====
{obj:'4.7', q:'Automatically spinning up additional cloud servers as part of a change request, without manual provisioning, is an example of:', c:['User provisioning','Resource provisioning','Security groups','Ticket creation'], a:1, e:'Resource provisioning automates the allocation of infrastructure resources like servers or storage.'},
{obj:'4.7', q:'Predefined automated boundaries that prevent a script or process from taking an unintended destructive action are called:', c:['Guard rails','Security groups','Escalation rules','Integrations'], a:0, e:'Guard rails are automated safety boundaries that constrain what automated processes are allowed to do.'},
{obj:'4.7', q:'Grouping cloud resources together and applying a shared set of network access rules to them is an example of using:', c:['Guard rails','Security groups','Ticket creation','APIs'], a:1, e:'Security groups apply a shared set of access rules to a logical grouping of resources.'},
{obj:'4.7', q:'Automatically generating a help desk ticket when a monitoring tool detects a specific security event is an example of:', c:['Ticket creation','Escalation','Guard rails','Continuous integration'], a:0, e:'Automated ticket creation streamlines incident tracking by generating tickets directly from detected events.'},
{obj:'4.7', q:'Automatically notifying a senior analyst when a lower-tier alert remains unresolved past a defined time threshold is an example of:', c:['Ticket creation','Escalation','Guard rails','Security groups'], a:1, e:'Escalation automatically routes unresolved issues to higher-tier staff after a defined threshold.'},
{obj:'4.7', q:'Automatically disabling a compromised user account\'s access the moment it is flagged by a SIEM is an example of:', c:['Enabling/disabling services and access','Ticket creation','Guard rails','Continuous integration'], a:0, e:'Automating account enable/disable actions is a direct security response use case for automation.'},
{obj:'4.7', q:'Automatically running a suite of security tests every time new code is committed to a repository is an example of:', c:['Continuous integration and testing','Guard rails','Ticket creation','Resource provisioning'], a:0, e:'Continuous integration and testing automates security validation as part of the software development pipeline.'},
{obj:'4.7', q:'Connecting a SOAR platform to a firewall\'s management API to automatically push new block rules is an example of:', c:['Integrations and APIs','Security groups','Guard rails','Escalation'], a:0, e:'Integrations and APIs allow different security tools to communicate and take coordinated automated action.'},
{obj:'4.7', q:'Which benefit of automation refers to consistently applying the same secure configuration across every new system deployed?', c:['Enforcing baselines','Employee retention','Reaction time','Workforce multiplier'], a:0, e:'Automation enforces baselines by consistently applying standard, secure configurations at scale.'},
{obj:'4.7', q:'Which benefit of automation is most directly responsible for reducing the time between detecting and responding to a threat?', c:['Reaction time','Employee retention','Cost','Technical debt'], a:0, e:'Automation dramatically reduces reaction time by eliminating manual delays in the response process.'},
{obj:'4.7', q:'An organization notes that reduced repetitive manual work from automation has improved job satisfaction and reduced turnover. This reflects which benefit?', c:['Employee retention','Reaction time','Scaling in a secure manner','Enforcing baselines'], a:0, e:'Reducing tedious manual work through automation can directly improve employee satisfaction and retention.'},
{obj:'4.7', q:'A poorly designed automation script accidentally disables access for an entire department instead of one user. This illustrates which risk of automation?', c:['Complexity','Single point of failure','Cost','Ongoing supportability'], a:1, e:'When a single automated process controls a critical function, a flaw can create a single point of failure with wide impact.'},
{obj:'4.7', q:'An organization struggles to find staff who understand a legacy automation script written years ago in an obscure language. This illustrates which risk?', c:['Technical debt','Cost','Complexity only, unrelated to staffing','Single point of failure'], a:0, e:'Technical debt reflects the accumulated cost of maintaining outdated or poorly documented automated systems.'},
{obj:'4.7', q:'Which consideration reflects the ongoing effort required to keep automated scripts and workflows functional as systems change over time?', c:['Ongoing supportability','Reaction time','Employee retention','Scaling in a secure manner'], a:0, e:'Ongoing supportability accounts for the continued maintenance automation requires as the environment evolves.'},
{obj:'4.7', q:'Automation that allows a security team of five to effectively manage the workload that would otherwise require fifteen people illustrates:', c:['A workforce multiplier','Technical debt','A single point of failure','Cost reduction only'], a:0, e:'Automation acting as a workforce multiplier extends the effective capacity of a limited security team.'},

// ===== 4.8 Incident response (15 new) =====
{obj:'4.8', q:'Developing playbooks, training staff, and establishing communication plans before any incident occurs falls under which IR phase?', c:['Preparation','Detection','Containment','Lessons learned'], a:0, e:'Preparation covers all proactive work done before an incident, including playbooks, training, and tooling.'},
{obj:'4.8', q:'Determining that a security event has actually occurred and confirming its scope is which incident response phase?', c:['Preparation','Detection','Eradication','Recovery'], a:1, e:'Detection is the phase where an incident is initially identified and confirmed.'},
{obj:'4.8', q:'Completely removing the malware, backdoors, or root cause from all affected systems is which incident response phase?', c:['Containment','Eradication','Recovery','Analysis'], a:1, e:'Eradication removes the actual threat and root cause from affected systems after containment.'},
{obj:'4.8', q:'Restoring affected systems back to normal production operation after an incident is which incident response phase?', c:['Containment','Eradication','Recovery','Detection'], a:2, e:'Recovery restores systems to normal operations once the threat has been eradicated.'},
{obj:'4.8', q:'Conducting a formal review after an incident to identify what went well and what should improve next time is called:', c:['Root cause analysis','Lessons learned','Containment','Eradication'], a:1, e:'Lessons learned reviews occur after an incident to improve future response processes.'},
{obj:'4.8', q:'Investigating an incident to determine the underlying, fundamental reason it occurred, rather than just its symptoms, is called:', c:['Root cause analysis','Lessons learned','Threat hunting','Digital forensics'], a:0, e:'Root cause analysis identifies the fundamental underlying cause of an incident, not just its surface symptoms.'},
{obj:'4.8', q:'Proactively searching for signs of compromise that existing automated tools have not yet flagged is called:', c:['Threat hunting','Root cause analysis','Lessons learned','Preparation'], a:0, e:'Threat hunting is a proactive, human-led search for hidden threats not caught by automated detection.'},
{obj:'4.8', q:'The formal, technical process of collecting, analyzing, and preserving evidence from a compromised system is called:', c:['Threat hunting','Root cause analysis','Digital forensics','Lessons learned'], a:2, e:'Digital forensics is the formal discipline of collecting, preserving, and analyzing digital evidence.'},
{obj:'4.8', q:'A legal directive requiring an organization to preserve specific data because it may be relevant to pending litigation is called a:', c:['Chain of custody','Legal hold','E-discovery','Preservation order only, unrelated to legal process'], a:1, e:'A legal hold requires preserving specific data due to anticipated or ongoing litigation.'},
{obj:'4.8', q:'Documenting every person who has handled a piece of digital evidence, and when, to maintain its integrity is called:', c:['Legal hold','Chain of custody','Acquisition','E-discovery'], a:1, e:'Chain of custody documents evidence handling to preserve its integrity and admissibility.'},
{obj:'4.8', q:'The forensic process of creating a verified, bit-for-bit copy of a compromised drive for analysis is called:', c:['Acquisition','Preservation','Reporting','E-discovery'], a:0, e:'Acquisition is the forensic process of collecting evidence, often as an exact forensic image.'},
{obj:'4.8', q:'Ensuring original evidence remains unaltered throughout an investigation, often by working only from copies, is called:', c:['Acquisition','Preservation','Reporting','Legal hold'], a:1, e:'Preservation ensures the original evidence remains unaltered and intact throughout the investigative process.'},
{obj:'4.8', q:'The legal process of identifying, collecting, and producing electronically stored information for litigation is called:', c:['Chain of custody','E-discovery','Legal hold','Acquisition'], a:1, e:'E-discovery is the legal process of finding and producing electronic evidence relevant to litigation.'},
{obj:'4.8', q:'Practicing a data-breach scenario through group discussion, without touching live systems, exercises which IR testing method?', c:['Tabletop exercise','Simulation','Parallel processing','Fail over test'], a:0, e:'Tabletop exercises are discussion-based walkthroughs used to test and refine incident response plans.'},
{obj:'4.8', q:'Actively running a mock incident where the response team must take real containment actions in a controlled environment is a:', c:['Tabletop exercise','Simulation','Root cause analysis','Legal hold'], a:1, e:'A simulation requires hands-on response actions, going further than a discussion-based tabletop exercise.'},

// ===== 4.9 Data sources for investigations (15 new) =====
{obj:'4.9', q:'Which log type would show which specific application crashed or threw an unhandled exception on a server?', c:['Firewall logs','Application logs','Network logs','IPS/IDS logs'], a:1, e:'Application logs record events, errors, and behavior specific to individual software applications.'},
{obj:'4.9', q:'Which log type would show failed login attempts and privilege changes specific to the Windows operating system?', c:['Network logs','OS-specific security logs','Firewall logs','Metadata'], a:1, e:'OS-specific security logs (like the Windows Security Event Log) record authentication and privilege events at the OS level.'},
{obj:'4.9', q:'Which log type records activity occurring directly on an individual workstation or server, such as process execution?', c:['Endpoint logs','Network logs','Firewall logs','IPS/IDS logs'], a:0, e:'Endpoint logs capture activity happening on the specific device, such as process starts and file access.'},
{obj:'4.9', q:'Which log source would show that a specific signature-based rule triggered an alert for suspicious traffic?', c:['Firewall logs','IPS/IDS logs','Application logs','Metadata'], a:1, e:'IPS/IDS logs record which detection signatures or rules were triggered by observed traffic.'},
{obj:'4.9', q:'Which log source would provide a broad view of overall traffic flow and connections across the network, rather than individual device activity?', c:['Endpoint logs','Network logs','Application logs','OS-specific logs'], a:1, e:'Network logs capture traffic flow and connection data across the broader network infrastructure.'},
{obj:'4.9', q:'A file\'s creation date, author, and GPS coordinates embedded within it are collectively referred to as:', c:['Metadata','Packet captures','Automated reports','A dashboard'], a:0, e:'Metadata is descriptive information about a file or object that can provide valuable investigative context.'},
{obj:'4.9', q:'An investigator wants to know exactly which bytes were exchanged during a suspicious network session. Which data source is most appropriate?', c:['Dashboards','Packet captures','Automated reports','Vulnerability scans'], a:1, e:'Packet captures preserve the full raw contents of network traffic, enabling exact reconstruction of a session.'},
{obj:'4.9', q:'A visual, real-time summary display showing current system health and active alerts is called a:', c:['Dashboard','Packet capture','Vulnerability scan','Automated report'], a:0, e:'A dashboard provides a real-time, visual summary of monitored systems and their current status.'},
{obj:'4.9', q:'A scheduled document summarizing weekly patch compliance across the organization is an example of:', c:['A dashboard','An automated report','A packet capture','Metadata'], a:1, e:'Automated reports are scheduled, generated summaries of monitored data delivered on a recurring basis.'},
{obj:'4.9', q:'Reviewing the most recent vulnerability scan results would primarily help an investigator determine:', c:['Whether a specific known weakness could have enabled the incident','The exact packet contents of an attack','Which employee accessed a file last','The physical location of a device'], a:0, e:'Vulnerability scan data helps investigators identify known weaknesses that may explain how an incident occurred.'},
{obj:'4.9', q:'Correlating firewall logs with endpoint logs during an investigation primarily helps analysts to:', c:['Confirm software license compliance','Build a fuller picture of an attacker\'s path across the network','Replace the need for packet captures','Automatically remediate the vulnerability'], a:1, e:'Correlating multiple log sources helps reconstruct a more complete picture of an attacker\'s activity.'},
{obj:'4.9', q:'Which data source would be most useful for confirming exactly when a specific file was last modified?', c:['Metadata','Packet captures','A dashboard','A vulnerability scan'], a:0, e:'File metadata includes timestamps such as creation and modification dates, useful in investigations.'},
{obj:'4.9', q:'An analyst wants a high-level, at-a-glance view of current SIEM alert volume without digging into individual logs. They should check the:', c:['Dashboard','Packet capture','Metadata','OS-specific security log'], a:0, e:'A dashboard is specifically designed to provide a quick, visual, high-level operational overview.'},
{obj:'4.9', q:'Which log data source would most directly show that a specific outbound connection was blocked by policy?', c:['Firewall logs','Application logs','Metadata','Endpoint logs'], a:0, e:'Firewall logs record which connections were explicitly allowed or denied based on configured rules.'},
{obj:'4.9', q:'During an investigation, an analyst needs to know which specific IDS rule ID triggered on a suspicious payload. This is found in:', c:['IPS/IDS logs','Network logs','Application logs','Metadata'], a:0, e:'IPS/IDS logs specifically record which detection signature or rule ID triggered on observed traffic.'},

// ===== 5.1 Security governance (15 new) =====
{obj:'5.1', q:'A policy specifically defining how the organization will continue essential functions during a major disruption is called a:', c:['Acceptable use policy','Business continuity policy','Change management policy','Access control standard'], a:1, e:'A business continuity policy defines how the organization sustains essential operations during disruption.'},
{obj:'5.1', q:'A policy outlining the specific steps to follow when responding to a security incident is called a(n):', c:['Incident response policy','Business continuity policy','SDLC policy','Onboarding procedure'], a:0, e:'An incident response policy defines the organization\'s formal approach and procedures for handling incidents.'},
{obj:'5.1', q:'A documented standard specifying minimum password length and complexity requirements is an example of a:', c:['Governance guideline','Password standard','Onboarding procedure','Playbook'], a:1, e:'Standards define specific, measurable requirements — like password rules — that must be followed.'},
{obj:'5.1', q:'A recommended, but not strictly mandatory, best practice for configuring systems is best described as a:', c:['Standard','Guideline','Policy','Procedure'], a:1, e:'Guidelines are recommended practices, generally less rigid and mandatory than formal standards or policies.'},
{obj:'5.1', q:'A step-by-step document detailing exactly how to respond to a specific type of security incident is called a:', c:['Guideline','Standard','Playbook','Policy'], a:2, e:'A playbook provides detailed, specific steps for handling a particular scenario, such as a ransomware event.'},
{obj:'5.1', q:'A formal procedure defining how new employees are granted system access and how departing employees have it revoked is called:', c:['Change management','Onboarding/offboarding','A playbook','A governance structure'], a:1, e:'Onboarding/offboarding procedures govern the lifecycle of granting and revoking employee access.'},
{obj:'5.1', q:'Requirements imposed by a specific government agency, such as HIPAA for healthcare providers, are an example of which external consideration?', c:['Industry','Regulatory','Local/regional','Global'], a:1, e:'Regulatory considerations stem from binding government requirements that organizations must legally follow.'},
{obj:'5.1', q:'Best practices specific to a particular business sector, such as PCI DSS for payment processors, are best classified as which external consideration?', c:['Regulatory','Industry','National','Global'], a:1, e:'Industry considerations reflect sector-specific standards and expectations, which may or may not be legally mandated.'},
{obj:'5.1', q:'A multinational organization must comply with data protection laws that vary by the country where each office operates. This reflects which consideration?', c:['Local/regional','National','Global','Industry'], a:0, e:'Local/regional considerations account for laws and requirements that differ by specific geographic jurisdiction.'},
{obj:'5.1', q:'A governance structure where a single centralized group makes all major security decisions for the entire organization is:', c:['Decentralized','Centralized','Committee-based only','A board only'], a:1, e:'Centralized governance places decision-making authority in a single group rather than distributing it.'},
{obj:'5.1', q:'A governance structure where individual departments or business units make their own independent security decisions is:', c:['Centralized','Decentralized','Regulatory','Global'], a:1, e:'Decentralized governance distributes decision-making authority across multiple independent units.'},
{obj:'5.1', q:'The board-level group responsible for high-level organizational security oversight and strategic direction is best described as a:', c:['Committee','Government entity','Board','Custodian'], a:2, e:'A board provides high-level strategic oversight and governance direction for the organization.'},
{obj:'5.1', q:'The individual role responsible for the day-to-day technical care and management of data, without owning it, is called a:', c:['Owner','Controller','Processor','Custodian/steward'], a:3, e:'A custodian/steward manages and maintains data on a day-to-day basis without holding ultimate ownership.'},
{obj:'5.1', q:'Which governance role determines the specific purpose and method by which personal data will be processed?', c:['Owner','Controller','Custodian','Processor'], a:1, e:'The controller determines the purposes and means of processing personal data, per privacy regulations like GDPR.'},
{obj:'5.1', q:'Regularly reviewing and updating governance policies to reflect new regulations or business changes is part of:', c:['Monitoring and revision','Onboarding/offboarding','Playbooks','Change management only'], a:0, e:'Monitoring and revision ensures governance documents stay current with evolving requirements and business needs.'},

// ===== 5.2 Risk management (15 new) =====
{obj:'5.2', q:'A one-time evaluation of risk performed for a specific new project, rather than on a recurring schedule, is called a(n):', c:['Continuous assessment','Ad hoc assessment','Recurring assessment','One-time assessment'], a:3, e:'A one-time assessment is conducted specifically for a single project or situation, not repeated on a schedule.'},
{obj:'5.2', q:'A risk assessment conducted spontaneously in response to an unplanned event, rather than on any fixed schedule, is called:', c:['Ad hoc','Recurring','Continuous','One-time'], a:0, e:'Ad hoc assessments are performed as needed, triggered by specific unplanned circumstances.'},
{obj:'5.2', q:'An organization that constantly monitors risk in real time, rather than through periodic assessments, is using which risk assessment approach?', c:['Ad hoc','Recurring','Continuous','One-time'], a:2, e:'Continuous risk assessment involves ongoing, real-time evaluation rather than assessments at fixed intervals.'},
{obj:'5.2', q:'Assigning risk levels of "high," "medium," or "low" based on subjective judgment, rather than precise numbers, is called:', c:['Quantitative analysis','Qualitative analysis','Exposure factor analysis','Likelihood analysis'], a:1, e:'Qualitative analysis uses subjective, descriptive ratings rather than precise numerical values.'},
{obj:'5.2', q:'Calculating that a specific risk could cost the organization exactly $250,000 per occurrence is an example of:', c:['Qualitative analysis','Quantitative analysis','Risk appetite assessment','Risk register maintenance'], a:1, e:'Quantitative analysis assigns specific numerical/monetary values to risk, unlike qualitative\'s descriptive ratings.'},
{obj:'5.2', q:'If an asset is worth $100,000 and a specific risk would destroy 40% of its value, the Single Loss Expectancy is:', c:['$40,000','$100,000','$4,000','$140,000'], a:0, e:'SLE = Asset Value × Exposure Factor = $100,000 × 0.40 = $40,000.'},
{obj:'5.2', q:'If a risk has an SLE of $40,000 and is expected to occur twice per year, the Annualized Loss Expectancy is:', c:['$20,000','$40,000','$80,000','$400,000'], a:2, e:'ALE = SLE × ARO = $40,000 × 2 = $80,000.'},
{obj:'5.2', q:'The estimated number of times per year a specific risk event is expected to occur is called the:', c:['Exposure factor','Annualized Rate of Occurrence','Single Loss Expectancy','Risk threshold'], a:1, e:'Annualized Rate of Occurrence (ARO) estimates how many times per year a risk event is expected to happen.'},
{obj:'5.2', q:'A centralized document that tracks identified risks, their owners, and their current status is called a:', c:['Risk register','Business impact analysis','Risk appetite statement','Risk tolerance policy'], a:0, e:'A risk register is the formal, centralized tracking document for identified organizational risks.'},
{obj:'5.2', q:'A metric used to provide early warning that a specific risk is trending toward becoming a real problem is called a:', c:['Risk owner','Key risk indicator','Risk threshold','Risk appetite'], a:1, e:'Key risk indicators are measurable metrics that provide early warning signs of increasing risk.'},
{obj:'5.2', q:'The maximum level of risk an organization has formally decided it is willing to accept before taking action is its:', c:['Risk appetite','Risk threshold','Risk register','Key risk indicator'], a:1, e:'Risk threshold defines the specific point at which risk becomes unacceptable and requires action.'},
{obj:'5.2', q:'An organization with an "expansionary" risk appetite is most likely to:', c:['Avoid nearly all new risks','Pursue new opportunities even with elevated risk','Only accept risk when legally required','Transfer all identifiable risk to insurers'], a:1, e:'An expansionary risk appetite reflects a willingness to pursue growth opportunities despite higher risk levels.'},
{obj:'5.2', q:'A formally documented, time-limited approval to accept a risk that violates policy, granted under specific circumstances, is called an:', c:['Exception','Exemption','Avoidance','Mitigation'], a:0, e:'An exception is a specific, often temporary, approved deviation from policy for a defined situation.'},
{obj:'5.2', q:'A blanket, ongoing policy that permanently excuses a particular category of system from a specific security requirement is called an:', c:['Exception','Exemption','Avoidance','Transfer'], a:1, e:'An exemption is a broader, more permanent excusal from a requirement, as opposed to a case-by-case exception.'},
{obj:'5.2', q:'A business impact analysis primarily helps an organization determine:', c:['The exact configuration of firewall rules','Which functions are most critical and their recovery priorities','The specific vendor to use for cloud services','The wording of an acceptable use policy'], a:1, e:'A BIA identifies critical business functions and quantifies the impact of their disruption, informing recovery priorities.'},

// ===== 5.3 Third-party risk management (15 new) =====
{obj:'5.3', q:'Requiring a vendor to undergo a penetration test as part of the selection process is an example of:', c:['Vendor assessment','Vendor monitoring','Conflict of interest review','Questionnaire distribution only'], a:0, e:'Requiring a penetration test is a specific technique used during vendor assessment before onboarding.'},
{obj:'5.3', q:'Reviewing a vendor\'s previously completed internal audit reports as part of due diligence is an example of:', c:['Independent assessment','Evidence of internal audits','Supply chain analysis','Right-to-audit clause exercise'], a:1, e:'Reviewing existing internal audit evidence is a specific vendor assessment technique.'},
{obj:'5.3', q:'Hiring an unrelated external firm to independently evaluate a vendor\'s security posture is an example of:', c:['Independent assessment','Evidence of internal audits','Supply chain analysis','Vendor selection'], a:0, e:'An independent assessment uses an unbiased third party to evaluate the vendor, separate from the vendor\'s own reporting.'},
{obj:'5.3', q:'Mapping and evaluating the security risk introduced by a vendor\'s own upstream suppliers is called:', c:['Supply chain analysis','Independent assessment','Right-to-audit clause','Conflict of interest review'], a:0, e:'Supply chain analysis examines risk introduced not just by the vendor, but by their own suppliers as well.'},
{obj:'5.3', q:'Thoroughly researching a vendor\'s financial stability, reputation, and security track record before signing a contract is called:', c:['Due diligence','Conflict of interest review','Vendor monitoring','Questionnaires'], a:0, e:'Due diligence is the thorough vetting process performed before formally engaging a vendor.'},
{obj:'5.3', q:'Identifying that a procurement manager has a personal financial stake in a vendor being selected is a concern related to:', c:['Due diligence','Conflict of interest','Vendor monitoring','Supply chain analysis'], a:1, e:'A conflict of interest arises when personal interests could improperly influence a business decision like vendor selection.'},
{obj:'5.3', q:'A contract clause that defines the specific measurable uptime a vendor commits to providing is a(n):', c:['SLA','NDA','MOU','BPA'], a:0, e:'A Service-Level Agreement (SLA) defines specific measurable performance commitments, such as uptime.'},
{obj:'5.3', q:'A relatively informal document expressing a general, often non-binding intent to collaborate between two organizations is a(n):', c:['MSA','MOU','SOW','NDA'], a:1, e:'A Memorandum of Understanding (MOU) documents general, typically non-binding intent between parties.'},
{obj:'5.3', q:'A more formal, often legally binding document establishing a cooperative relationship, stronger than an MOU, is a(n):', c:['MOA','SOW','NDA','SLA'], a:0, e:'A Memorandum of Agreement (MOA) is generally more formal and binding than an MOU.'},
{obj:'5.3', q:'An overarching contract that establishes general terms governing all future individual work orders between two parties is a(n):', c:['MSA','MOU','NDA','BPA'], a:0, e:'A Master Service Agreement (MSA) sets the general terms that individual future statements of work will follow.'},
{obj:'5.3', q:'A specific document detailing the exact deliverables, timeline, and scope for one particular vendor engagement is a(n):', c:['MSA','SOW','MOU','SLA'], a:1, e:'A Statement of Work (SOW) defines the specific deliverables and scope for a particular engagement.'},
{obj:'5.3', q:'A contract specifically defining the terms of a collaborative relationship between two business partners is a(n):', c:['BPA','NDA','MSA','SOW'], a:0, e:'A Business Partners Agreement (BPA) defines the terms governing a partnership between two organizations.'},
{obj:'5.3', q:'Sending a vendor a standardized set of security-related questions to assess their practices before onboarding is called using a:', c:['Right-to-audit clause','Questionnaire','Rules of engagement','Supply chain analysis'], a:1, e:'Security questionnaires are a standardized way to gather information about a vendor\'s practices.'},
{obj:'5.3', q:'Continuing to periodically review a vendor\'s security posture throughout the life of the contract, not just before signing, is called:', c:['Vendor selection','Vendor monitoring','Due diligence','Conflict of interest review'], a:1, e:'Vendor monitoring is the ongoing oversight of a vendor\'s security posture throughout the relationship.'},
{obj:'5.3', q:'Formally defining the boundaries and permitted actions before conducting a penetration test against a vendor\'s systems is called establishing:', c:['Rules of engagement','A right-to-audit clause','An SLA','A conflict of interest policy'], a:0, e:'Rules of engagement formally define the scope and boundaries of authorized testing activities.'},

// ===== 5.4 Security compliance (15 new) =====
{obj:'5.4', q:'A compliance report shared only with internal leadership and auditors, not released publicly, is an example of:', c:['External reporting','Internal reporting','Regulatory reporting only','Attestation'], a:1, e:'Internal compliance reporting is shared within the organization rather than with external parties.'},
{obj:'5.4', q:'A compliance report submitted to a government regulator to demonstrate adherence to a legal requirement is an example of:', c:['Internal reporting','External reporting','Due diligence only','Automation'], a:1, e:'External reporting is shared with outside parties, such as regulators, to demonstrate compliance.'},
{obj:'5.4', q:'A regulator revokes an organization\'s authorization to process credit card payments due to repeated non-compliance. This reflects which consequence?', c:['Fines','Loss of license','Reputational damage','Contractual impacts'], a:1, e:'Loss of license/authorization removes the organization\'s ability to legally perform certain regulated activities.'},
{obj:'5.4', q:'Negative press coverage following a compliance failure that damages customer trust reflects which consequence of non-compliance?', c:['Fines','Sanctions','Reputational damage','Loss of license'], a:2, e:'Reputational damage reflects the loss of public trust and brand harm resulting from a compliance failure.'},
{obj:'5.4', q:'A partner terminates a contract early after discovering a compliance violation, citing breach of agreed terms. This reflects:', c:['Fines','Contractual impacts','Sanctions','Loss of license'], a:1, e:'Contractual impacts occur when non-compliance triggers penalties or termination under existing agreements.'},
{obj:'5.4', q:'Regularly and formally verifying that required security controls are actually in place and functioning is called:', c:['Due diligence/care','Attestation','Automation','Data inventory'], a:0, e:'Due diligence/care reflects the ongoing, reasonable effort to verify and maintain required controls.'},
{obj:'5.4', q:'Formally signing a document confirming that a specific compliance requirement has been reviewed and met is an example of:', c:['Due diligence','Attestation and acknowledgement','Automation','Data retention'], a:1, e:'Attestation and acknowledgement involves formally confirming, often in writing, that a requirement has been satisfied.'},
{obj:'5.4', q:'Using automated tools to continuously check systems against compliance requirements, rather than relying on periodic manual review, reflects:', c:['Automation in compliance monitoring','Due diligence only','Internal reporting only','Data subject rights'], a:0, e:'Automation streamlines compliance monitoring by continuously and consistently checking systems against requirements.'},
{obj:'5.4', q:'Under privacy regulations, the individual whose personal data is being collected and processed is referred to as the:', c:['Data controller','Data processor','Data subject','Data custodian'], a:2, e:'The data subject is the individual to whom the personal data being processed belongs.'},
{obj:'5.4', q:'An organization that processes personal data strictly according to another company\'s instructions, without determining the purpose itself, is acting as the:', c:['Data controller','Data processor','Data subject','Data owner'], a:1, e:'A data processor acts on behalf of and under the instruction of a data controller, without setting the purpose.'},
{obj:'5.4', q:'Maintaining a catalog of what personal data an organization holds, where it is stored, and how long it will be kept is called:', c:['Data inventory and retention','Attestation','Automation','Ownership'], a:0, e:'Data inventory and retention tracks what data exists, where it resides, and how long it must be kept.'},
{obj:'5.4', q:'A customer formally requests that a company permanently delete all of their stored personal data. This request invokes the:', c:['Right to be forgotten','Data controller designation','Attestation process','Automation policy'], a:0, e:'The right to be forgotten allows individuals to request the erasure of their personal data, as under GDPR.'},
{obj:'5.4', q:'Which legal implication consideration accounts for privacy laws that differ significantly between individual countries?', c:['Local/regional','National','Global','Industry'], a:2, e:'Global legal implications account for the wide variance in privacy and data protection laws across different countries.'},
{obj:'5.4', q:'Which role in a compliance context is ultimately accountable for how a data asset is classified and protected?', c:['Data processor','Data owner','Data subject','Auditor'], a:1, e:'The data owner holds ultimate accountability for a data asset, including its classification and protection.'},
{obj:'5.4', q:'A company implements automated data-loss prevention scanning as part of demonstrating ongoing PCI DSS compliance. This is an example of:', c:['Automation in compliance monitoring','Internal reporting only','A right-to-audit clause','Attestation only'], a:0, e:'Using automated tools like DLP to continuously verify compliance is a direct example of compliance automation.'},

// ===== 5.5 Audits and assessments (15 new) =====
{obj:'5.5', q:'A formal review conducted by a government regulator to verify legal compliance is classified as which type of audit?', c:['Internal','External','Self-assessment','Independent third-party (non-regulatory)'], a:1, e:'A regulatory examination is a form of external audit conducted by a government body.'},
{obj:'5.5', q:'An organization\'s own committee reviewing internal controls without outside involvement is performing which type of audit?', c:['External','Regulatory examination','Internal (audit committee)','Independent third-party audit'], a:2, e:'An internal audit committee performs reviews using the organization\'s own personnel and resources.'},
{obj:'5.5', q:'A team conducting an informal internal review of their own department\'s compliance, without a formal external audit process, is performing a(n):', c:['Self-assessment','Regulatory examination','Independent third-party audit','External assessment'], a:0, e:'A self-assessment is an internal, often less formal, review conducted by the team responsible for the area.'},
{obj:'5.5', q:'Hiring an outside accounting firm with no prior relationship to formally validate financial and security controls is an example of a(n):', c:['Self-assessment','Internal audit','Independent third-party audit','Audit committee review'], a:2, e:'An independent third-party audit uses an unrelated outside party to provide unbiased validation.'},
{obj:'5.5', q:'A penetration test that focuses specifically on physically breaching a facility\'s access controls, rather than networks, is a:', c:['Offensive penetration test','Physical penetration test','Defensive penetration test','Integrated penetration test'], a:1, e:'A physical penetration test specifically evaluates physical security controls like doors, badges, and guards.'},
{obj:'5.5', q:'A penetration test where the testing team acts purely as attackers, focused on breaching defenses, is classified as:', c:['Offensive','Defensive','Integrated','Physical only'], a:0, e:'Offensive penetration testing focuses on actively attacking and attempting to breach systems.'},
{obj:'5.5', q:'A penetration test conducted alongside the organization\'s own security (blue) team, actively working together, is classified as:', c:['Offensive','Defensive','Integrated','Physical'], a:2, e:'An integrated test combines red team (offensive) and blue team (defensive) collaboration during testing.'},
{obj:'5.5', q:'A security assessment focused on evaluating and improving an organization\'s detection and response capabilities, rather than attacking, is:', c:['Offensive','Defensive','Physical','Integrated only'], a:1, e:'Defensive assessments evaluate and strengthen an organization\'s detection and response capabilities.'},
{obj:'5.5', q:'A penetration test where testers are given login credentials and network diagrams in advance is conducted under which environment condition?', c:['Unknown environment','Partially known environment','Known environment','Passive environment'], a:2, e:'A known environment test (white-box) gives testers full advance information about the target.'},
{obj:'5.5', q:'A penetration test where testers are given no information at all and must discover everything themselves is conducted under which environment condition?', c:['Known environment','Partially known environment','Unknown environment','Integrated environment'], a:2, e:'An unknown environment test (black-box) gives testers no prior information, simulating a real external attacker.'},
{obj:'5.5', q:'A penetration test where testers are given limited information, such as just a company name, reflects which environment condition?', c:['Known environment','Partially known environment','Unknown environment','Integrated environment'], a:1, e:'A partially known environment test (gray-box) provides testers with some, but not complete, information.'},
{obj:'5.5', q:'Searching public records, social media, and company websites without touching any target systems is an example of:', c:['Active reconnaissance','Passive reconnaissance','Offensive testing','Physical testing'], a:1, e:'Passive reconnaissance gathers information without directly interacting with or scanning target systems.'},
{obj:'5.5', q:'Directly port-scanning a target\'s external IP addresses to identify open services is an example of:', c:['Passive reconnaissance','Active reconnaissance','Physical testing','Defensive testing'], a:1, e:'Active reconnaissance directly interacts with and probes target systems, unlike passive information gathering.'},
{obj:'5.5', q:'Which best describes the purpose of an "attestation" in the context of audits?', c:['A formal statement affirming that a specific claim or control has been verified','A type of penetration test','A risk register entry','A vendor selection criterion'], a:0, e:'Attestation is a formal statement or declaration affirming that a claim or control has been verified.'},
{obj:'5.5', q:'Which audit type would be most appropriate for verifying compliance with a specific industry certification, performed by an accredited outside body?', c:['Self-assessment','Internal compliance review','Independent third-party audit','Audit committee review'], a:2, e:'Certification compliance is typically verified through accredited independent third-party audits.'},

// ===== 5.6 Security awareness (15 new) =====
{obj:'5.6', q:'Running scheduled, simulated phishing emails against employees to measure and improve their detection rate is called a:', c:['Phishing campaign','Reporting cadence','Situational awareness program','Insider threat program'], a:0, e:'Phishing campaigns are simulated exercises designed to train and measure employee phishing detection.'},
{obj:'5.6', q:'Teaching employees to identify subtle red flags like mismatched sender domains and urgent language builds their ability in:', c:['Recognizing a phishing attempt','Responding to reported suspicious messages','Situational awareness only','Password management'], a:0, e:'Training on red flags directly builds employees\' skill in recognizing phishing attempts.'},
{obj:'5.6', q:'Establishing a clear internal process for what security staff do after an employee reports a suspicious email is called:', c:['Recognizing a phishing attempt','Responding to reported suspicious messages','A phishing campaign','Operational security'], a:1, e:'This defines the organizational process for handling and acting on user-reported suspicious messages.'},
{obj:'5.6', q:'An employee accessing a system at 3am from an unfamiliar location, despite never doing so before, is best categorized as which anomalous behavior type?', c:['Risky','Unexpected','Unintentional','Routine'], a:1, e:'Unexpected behavior deviates from established patterns without necessarily being clearly malicious or careless.'},
{obj:'5.6', q:'An employee accidentally CCs a sensitive report to the wrong distribution list. This is best categorized as which anomalous behavior type?', c:['Risky','Unexpected','Unintentional','Routine'], a:2, e:'Unintentional behavior reflects an honest mistake rather than deliberate risk-taking or malicious intent.'},
{obj:'5.6', q:'Providing new employees with a written document outlining expected security behaviors and responsibilities reflects which user guidance element?', c:['Policy/handbooks','Situational awareness','Insider threat awareness','Operational security'], a:0, e:'Policy/handbooks provide formal written guidance on expected employee security behaviors.'},
{obj:'5.6', q:'Training employees to notice when someone is closely watching them enter a badge code (shoulder surfing) builds their:', c:['Situational awareness','Insider threat program participation','Operational security only','Password management skills'], a:0, e:'Situational awareness training helps employees notice and respond to real-time security risks around them.'},
{obj:'5.6', q:'Educating staff on the warning signs that a coworker might be planning to misuse their access is part of:', c:['Insider threat awareness','Situational awareness only','Removable media training','Hybrid work training'], a:0, e:'Insider threat awareness training helps staff recognize behavioral indicators of a potential internal risk.'},
{obj:'5.6', q:'Teaching employees never to reuse work passwords on personal accounts is part of which awareness topic?', c:['Password management','Situational awareness','Operational security','Social engineering'], a:0, e:'Password management training covers safe password practices, including avoiding reuse across accounts.'},
{obj:'5.6', q:'Training staff on the risks of plugging in unknown USB drives found in a parking lot addresses which awareness topic?', c:['Password management','Removable media and cables','Situational awareness only','Hybrid/remote work environments'], a:1, e:'Removable media and cables training specifically addresses risks from USB drives and similar physical media.'},
{obj:'5.6', q:'Coaching employees to avoid revealing sensitive operational details on social media addresses which awareness topic?', c:['Operational security (OPSEC)','Password management','Removable media','Reporting cadence'], a:0, e:'Operational security (OPSEC) training focuses on protecting sensitive information from being inadvertently disclosed.'},
{obj:'5.6', q:'Providing specific guidance for securely connecting to corporate resources while working from a home network addresses:', c:['Hybrid/remote work environments','Situational awareness only','Insider threat awareness','Removable media training'], a:0, e:'Hybrid/remote work training addresses the unique security considerations of working outside the traditional office.'},
{obj:'5.6', q:'Requiring every new hire to complete security awareness training during their first week is an example of which reporting/training cadence?', c:['Initial','Recurring','Ongoing only','Ad hoc'], a:0, e:'Initial training is delivered once, typically at the start of employment, before recurring refreshers follow.'},
{obj:'5.6', q:'Requiring all employees to retake security awareness training annually is an example of which cadence?', c:['Initial','Recurring','One-time only','Ad hoc'], a:1, e:'Recurring training is repeated on a regular schedule to reinforce behaviors and address new threats.'},
{obj:'5.6', q:'Designing the actual content, materials, and format of a new security awareness training program is part of which program lifecycle stage?', c:['Development','Execution','Reporting','Monitoring'], a:0, e:'Development covers the creation and design of the awareness program\'s content and materials before it is delivered.'},
];
/* ============ FLASHCARDS ============ */
const FLASHCARDS = [
  {t:'CIA Triad', obj:'1.2', d:'Confidentiality, Integrity, and Availability — the three foundational goals of information security.'},
  {t:'Non-repudiation', obj:'1.2', d:'Assurance that someone cannot deny having performed an action, often provided by digital signatures.'},
  {t:'Zero Trust', obj:'1.2', d:'A security model that assumes no implicit trust and continuously verifies every request, regardless of origin.'},
  {t:'Honeypot', obj:'1.2', d:'A decoy system designed to attract attackers and study their techniques away from real assets.'},
  {t:'Least Privilege', obj:'2.5', d:'Granting users/systems only the minimum access rights needed to perform their function.'},
  {t:'Defense in Depth', obj:'2.5', d:'Layering multiple security controls so that if one fails, others still provide protection.'},
  {t:'Symmetric Encryption', obj:'1.4', d:'Encryption using the same key for both encrypting and decrypting data (e.g., AES).'},
  {t:'Asymmetric Encryption', obj:'1.4', d:'Encryption using a mathematically linked public/private key pair (e.g., RSA).'},
  {t:'Salting', obj:'1.4', d:'Adding random data to a password before hashing to prevent rainbow table attacks.'},
  {t:'Key Stretching', obj:'1.4', d:'Repeatedly processing a key/password (e.g., PBKDF2) to make brute-force attacks slower.'},
  {t:'PKI', obj:'1.4', d:'Public Key Infrastructure — the framework of CAs, certificates, and policies that manage public key encryption.'},
  {t:'Certificate Revocation List (CRL)', obj:'1.4', d:'A published list of certificates that have been revoked before their expiration date.'},
  {t:'Threat Actor', obj:'2.1', d:'Any individual or group responsible for a cyber incident, ranging from nation-states to unskilled attackers.'},
  {t:'Advanced Persistent Threat (APT)', obj:'2.1', d:'A prolonged, stealthy, and highly resourced cyberattack, typically by nation-state actors.'},
  {t:'Watering Hole Attack', obj:'2.2', d:'Compromising a site the target frequently visits rather than attacking them directly.'},
  {t:'Typosquatting', obj:'2.2', d:'Registering domains with common misspellings of legitimate sites to trick users.'},
  {t:'Business Email Compromise (BEC)', obj:'2.2', d:'A social engineering attack impersonating an executive/vendor to trick a victim into a wire transfer or data leak.'},
  {t:'SQL Injection', obj:'2.3', d:'Inserting malicious SQL statements into input fields to manipulate a backend database.'},
  {t:'Cross-Site Scripting (XSS)', obj:'2.3', d:'Injecting malicious scripts into trusted web pages that execute in another user\'s browser.'},
  {t:'Buffer Overflow', obj:'2.3', d:'Writing more data to a buffer than it can hold, potentially overwriting adjacent memory and executing code.'},
  {t:'Zero-Day', obj:'2.3', d:'A vulnerability that is exploited before the vendor is aware of it or has released a patch.'},
  {t:'VM Escape', obj:'2.3', d:'A vulnerability that lets malicious code break out of an isolated virtual machine to affect the host.'},
  {t:'DDoS', obj:'2.4', d:'Distributed Denial of Service — overwhelming a target with traffic from many distributed sources.'},
  {t:'Impossible Travel', obj:'2.4', d:'A detection indicator flagging logins from geographically distant locations in an implausible timeframe.'},
  {t:'Segmentation', obj:'2.5', d:'Dividing a network into isolated zones to contain the impact of a compromise.'},
  {t:'Hardening', obj:'2.5', d:'Reducing a system\'s attack surface by disabling unneeded services, changing defaults, and patching.'},
  {t:'Air-Gapped Network', obj:'3.1', d:'A network with no physical connection to any other network, providing strong isolation.'},
  {t:'Infrastructure as Code (IaC)', obj:'3.1', d:'Managing and provisioning infrastructure through machine-readable definition files instead of manual setup.'},
  {t:'SASE', obj:'3.2', d:'Secure Access Service Edge — converges SD-WAN networking with cloud-delivered security services.'},
  {t:'Tokenization', obj:'3.3', d:'Replacing sensitive data with a non-sensitive token that maps back to the original in a secure vault.'},
  {t:'Data Sovereignty', obj:'3.3', d:'The concept that data is subject to the laws of the country in which it is physically stored.'},
  {t:'Hot Site', obj:'3.4', d:'A fully equipped alternate site that can take over operations almost immediately.'},
  {t:'BYOD', obj:'4.1', d:'Bring Your Own Device — employees use personal devices for work, typically under partial corporate control.'},
  {t:'Sandboxing', obj:'4.1', d:'Executing untrusted code in an isolated environment to safely observe its behavior.'},
  {t:'CVSS', obj:'4.3', d:'Common Vulnerability Scoring System — provides a standardized numeric severity score for vulnerabilities.'},
  {t:'False Positive', obj:'4.3', d:'A scan/alert result that incorrectly flags something as malicious when it is not.'},
  {t:'SIEM', obj:'4.4', d:'Security Information and Event Management — centralizes and correlates logs to detect security events.'},
  {t:'NAC', obj:'4.5', d:'Network Access Control — enforces device posture/policy compliance before granting network access.'},
  {t:'SOAR', obj:'4.7', d:'Security Orchestration, Automation, and Response — automates incident response workflows.'},
  {t:'RBAC', obj:'4.6', d:'Role-Based Access Control — grants permissions according to a user\'s assigned job role.'},
  {t:'MFA', obj:'4.6', d:'Multifactor Authentication — requires two or more independent factors to verify identity.'},
  {t:'Just-in-Time Access', obj:'4.6', d:'Granting elevated permissions only for a limited, predefined time window when needed.'},
  {t:'SAML', obj:'4.6', d:'Security Assertion Markup Language — an XML-based standard for exchanging authentication assertions for SSO.'},
  {t:'Chain of Custody', obj:'4.8', d:'A documented, unbroken record of who has handled evidence, preserving its integrity for legal use.'},
  {t:'Threat Hunting', obj:'4.8', d:'Proactively searching a network for signs of compromise that automated tools may have missed.'},
  {t:'RPO', obj:'5.2', d:'Recovery Point Objective — the maximum acceptable amount of data loss, measured in time (a business impact analysis metric).'},
  {t:'RTO', obj:'5.2', d:'Recovery Time Objective — the maximum acceptable amount of downtime after an incident (a business impact analysis metric).'},
  {t:'SLE / ALE', obj:'5.2', d:'Single/Annualized Loss Expectancy — quantitative risk metrics used to estimate expected financial loss.'},
  {t:'Risk Transfer', obj:'5.2', d:'A risk management strategy that shifts financial impact to a third party, such as insurance.'},
  {t:'Right-to-Audit Clause', obj:'5.3', d:'A contract clause granting an organization the right to formally audit a vendor\'s security practices.'},
  {t:'Data Controller vs. Processor', obj:'5.4', d:'The controller determines the purpose of processing personal data; the processor acts on the controller\'s instructions.'},
  {t:'Known Environment Test', obj:'5.5', d:'A penetration test where testers have full advance knowledge of the target\'s architecture (white-box).'},
  {t:'Passive Reconnaissance', obj:'5.5', d:'Gathering target information from public sources without directly interacting with target systems.'},
{t:'Compensating Control', obj:'1.1', d:'An alternative safeguard used when the primary control can\'t be implemented, reducing risk by another means.'},
{t:'Deterrent Control', obj:'1.1', d:'A control that discourages a violation from being attempted, such as warning signage, without physically stopping it.'},
{t:'Directive Control', obj:'1.1', d:'A control that mandates a specific action or behavior, such as a policy requiring security training.'},
{t:'Access Control Vestibule', obj:'1.2', d:'A small enclosed space with two interlocking doors that prevents tailgating by only allowing one person through at a time.'},
{t:'Honeynet', obj:'1.2', d:'A network of honeypots that simulates a real environment to observe and study attacker behavior.'},
{t:'Honeytoken', obj:'1.2', d:'A fake piece of data, such as a bogus record, planted to detect unauthorized access or misuse.'},
{t:'Policy Enforcement Point', obj:'1.2', d:'In Zero Trust, the component on the data plane that carries out the access decision made by the control plane.'},
{t:'Backout Plan', obj:'1.3', d:'A documented plan describing how to reverse a change if it causes unexpected problems.'},
{t:'Standard Operating Procedure (SOP)', obj:'1.3', d:'A documented, repeatable set of instructions for performing a routine task or change consistently.'},
{t:'Maintenance Window', obj:'1.3', d:'A pre-scheduled period during which changes may cause disruption without violating service agreements.'},
{t:'Key Escrow', obj:'1.4', d:'The practice of storing a copy of a cryptographic key with a trusted third party for recovery purposes.'},
{t:'Steganography', obj:'1.4', d:'Concealing a secret message or data within another file or medium so its presence isn\'t obvious.'},
{t:'OCSP', obj:'1.4', d:'Online Certificate Status Protocol — allows real-time checking of a single certificate\'s revocation status.'},
{t:'Wildcard Certificate', obj:'1.4', d:'A single certificate that secures a base domain and all of its first-level subdomains.'},
{t:'Hacktivist', obj:'2.1', d:'A threat actor motivated by political or social causes, often expressed through website defacement or disruption.'},
{t:'Insider Threat', obj:'2.1', d:'A threat originating from someone with legitimate or prior access to an organization, such as an employee.'},
{t:'Shadow IT', obj:'2.1', d:'Technology used within an organization without explicit IT approval or oversight.'},
{t:'Organized Crime', obj:'2.1', d:'Financially motivated criminal groups that run large-scale, profit-driven cyber operations like ransomware.'},
{t:'Vishing', obj:'2.2', d:'A social engineering attack conducted over a phone call (voice phishing).'},
{t:'Smishing', obj:'2.2', d:'A social engineering attack conducted via SMS text message.'},
{t:'Pretexting', obj:'2.2', d:'Fabricating a believable false scenario or identity to manipulate a target into divulging information or access.'},
{t:'Default Credentials', obj:'2.2', d:'Factory-set usernames and passwords that, if never changed after deployment, provide an easy entry point for attackers.'},
{t:'Race Condition (TOCTOU)', obj:'2.3', d:'A vulnerability exploiting the timing gap between when a resource is checked and when it is actually used.'},
{t:'Memory Injection', obj:'2.3', d:'A vulnerability that allows malicious code to be inserted directly into a running process\'s memory space.'},
{t:'Misconfiguration', obj:'2.3', d:'A security weakness introduced by improper system or service settings rather than a flaw in the code itself.'},
{t:'Jailbreaking', obj:'2.3', d:'Removing manufacturer restrictions on a mobile device to gain root-level access, disabling many built-in protections.'},
{t:'Rootkit', obj:'2.4', d:'Malware that embeds itself deep in the OS, often at the kernel level, to hide its presence and maintain access.'},
{t:'Logic Bomb', obj:'2.4', d:'Malicious code that lies dormant until triggered by a specific condition, such as a date or event.'},
{t:'Keylogger', obj:'2.4', d:'Malware that covertly records a user\'s keystrokes to capture credentials and other sensitive input.'},
{t:'Worm', obj:'2.4', d:'Self-replicating malware that spreads autonomously across a network without needing a host file or user action.'},
{t:'Credential Replay', obj:'2.4', d:'An attack that captures a valid authentication token and reuses it later to impersonate the legitimate user.'},
{t:'Application Allow Listing', obj:'2.5', d:'Restricting which applications are permitted to run on a system, blocking everything else by default.'},
{t:'Configuration Enforcement', obj:'2.5', d:'Continuously ensuring systems remain compliant with an approved, secure configuration baseline.'},
{t:'Decommissioning', obj:'2.5', d:'The formal process of retiring a system, including data sanitization and removal from inventory.'},
{t:'Containerization', obj:'3.1', d:'Packaging an application with its dependencies into a lightweight, portable unit that shares the host OS kernel.'},
{t:'Microservices', obj:'3.1', d:'An architecture that breaks a large application into small, independently deployable services communicating over APIs.'},
{t:'Serverless Computing', obj:'3.1', d:'Running application code in response to events without provisioning or managing any underlying servers.'},
{t:'Software-Defined Networking (SDN)', obj:'3.1', d:'An architecture separating the network control plane from the data plane, enabling centralized programmable management.'},
{t:'Jump Server', obj:'3.2', d:'A hardened, monitored intermediary server used to provide administrators a secure path to manage internal systems.'},
{t:'Load Balancer', obj:'3.2', d:'A device that distributes incoming traffic across multiple backend servers to improve availability and performance.'},
{t:'Screened Subnet (DMZ)', obj:'3.2', d:'A network zone positioned between the internet and the internal network that hosts public-facing services.'},
{t:'Next-Generation Firewall (NGFW)', obj:'3.2', d:'A firewall that inspects traffic at the application layer, adding features like intrusion prevention and identity awareness.'},
{t:'Data Classification', obj:'3.3', d:'Assigning a sensitivity level (e.g., public, confidential, critical) to data to determine how it must be protected.'},
{t:'Data Masking', obj:'3.3', d:'Obscuring part of a data value for display purposes while the underlying value remains unchanged in storage.'},
{t:'Geolocation Restriction', obj:'3.3', d:'Using a device or user\'s physical location as a factor to allow or deny access to sensitive data.'},
{t:'Cold Site', obj:'3.4', d:'An alternate recovery site with only basic infrastructure, requiring significant time and effort to become operational.'},
{t:'Warm Site', obj:'3.4', d:'An alternate recovery site that is partially configured, striking a balance between cost and recovery speed.'},
{t:'Journaling', obj:'3.4', d:'Continuously recording every transaction or change to a system, allowing precise point-in-time recovery.'},
{t:'Tabletop Exercise', obj:'3.4', d:'A discussion-based walkthrough of a response plan where teams talk through a scenario without disrupting live systems.'},
{t:'Mobile Device Management (MDM)', obj:'4.1', d:'Software that lets organizations enforce policy, security settings, and remote wipe on managed mobile devices.'},
{t:'COPE', obj:'4.1', d:'Corporate-Owned, Personally Enabled — a mobile deployment model where the company owns the device but allows personal use.'},
{t:'CYOD', obj:'4.1', d:'Choose Your Own Device — employees pick from a company-approved device list, with the company retaining ownership.'},
{t:'Code Signing', obj:'4.1', d:'Cryptographically signing software so users can verify it hasn\'t been tampered with since publication.'},
{t:'Sanitization', obj:'4.2', d:'The process of removing data from storage media so it cannot be recovered, prior to reuse or disposal.'},
{t:'Asset Destruction', obj:'4.2', d:'Physically damaging storage media (shredding, incineration, degaussing) so data can never be recovered.'},
{t:'Data Retention Policy', obj:'4.2', d:'A policy defining how long specific data types must be kept before they can be disposed of.'},
{t:'Bug Bounty Program', obj:'4.3', d:'A program that rewards independent researchers for responsibly disclosing discovered vulnerabilities.'},
{t:'Penetration Test', obj:'4.3', d:'An authorized, active simulation of a real-world attack used to identify exploitable weaknesses.'},
{t:'False Negative', obj:'4.3', d:'A vulnerability scan result that fails to detect a real, exploitable flaw that genuinely exists.'},
{t:'Exposure Factor', obj:'4.3', d:'The percentage of an asset\'s value that would be lost if a specific risk were realized.'},
{t:'Alert Tuning', obj:'4.4', d:'Adjusting detection thresholds and rules to reduce excessive false-positive alerts.'},
{t:'SCAP', obj:'4.4', d:'Security Content Automation Protocol — a standardized suite for automating vulnerability and configuration compliance checks.'},
{t:'NetFlow', obj:'4.4', d:'A protocol that collects summarized network traffic flow statistics, useful for traffic analysis.'},
{t:'DMARC', obj:'4.5', d:'An email policy standard that tells receivers what to do when SPF/DKIM checks fail, reducing spoofing.'},
{t:'UTM', obj:'4.5', d:'Unified Threat Management — an appliance that bundles multiple security functions like firewall and IPS into one device.'},
{t:'File Integrity Monitoring (FIM)', obj:'4.5', d:'A tool that continuously monitors critical files for unauthorized changes by comparing them to a known-good baseline.'},
{t:'Federation', obj:'4.6', d:'Allowing identities to be trusted and used across separate, independently managed organizations for SSO.'},
{t:'Identity Proofing', obj:'4.6', d:'Verifying a person\'s real-world identity before issuing them digital credentials or access.'},
{t:'Attestation', obj:'4.6', d:'A formal statement or declaration confirming that a claim, requirement, or control has been verified.'},
{t:'ABAC', obj:'4.6', d:'Attribute-Based Access Control — grants access by evaluating multiple contextual attributes together, like role, device, and time.'},
{t:'Guard Rails', obj:'4.7', d:'Predefined automated boundaries that prevent a script or process from taking an unintended destructive action.'},
{t:'Technical Debt', obj:'4.7', d:'The accumulated cost and risk of maintaining outdated, poorly documented, or hastily built automated systems.'},
{t:'Single Point of Failure', obj:'4.7', d:'A component whose failure would disrupt an entire system, a key risk when automation is overly centralized.'},
{t:'Root Cause Analysis', obj:'4.8', d:'Investigating an incident to determine its fundamental underlying cause, not just its surface symptoms.'},
{t:'Legal Hold', obj:'4.8', d:'A legal directive requiring an organization to preserve specific data relevant to pending or anticipated litigation.'},
{t:'E-Discovery', obj:'4.8', d:'The legal process of identifying, collecting, and producing electronically stored information for litigation.'},
{t:'Digital Forensics', obj:'4.8', d:'The formal discipline of collecting, preserving, and analyzing digital evidence from a compromised system.'},
{t:'Packet Capture (PCAP)', obj:'4.9', d:'A raw recording of network traffic used by analysts to investigate and reconstruct exact communications.'},
{t:'Metadata', obj:'4.9', d:'Descriptive information about a file or object, such as author, timestamps, or GPS coordinates, useful in investigations.'},
{t:'Security Dashboard', obj:'4.9', d:'A real-time visual summary display showing current system health, active alerts, and key metrics.'},
{t:'Acceptable Use Policy (AUP)', obj:'5.1', d:'A policy defining what employees are and are not permitted to do with organizational IT resources.'},
{t:'Data Owner', obj:'5.1', d:'The individual or group ultimately accountable for a data asset, including its classification and protection.'},
{t:'Data Custodian', obj:'5.1', d:'The role responsible for the day-to-day technical care and management of data, without holding ultimate ownership.'},
{t:'Playbook', obj:'5.1', d:'A step-by-step document detailing exactly how to respond to a specific type of security incident.'},
{t:'Risk Register', obj:'5.2', d:'A centralized document that tracks identified risks, their owners, status, and mitigation plans.'},
{t:'Risk Appetite', obj:'5.2', d:'The overall level of risk an organization is willing to pursue or accept in pursuit of its objectives.'},
{t:'Business Impact Analysis (BIA)', obj:'5.2', d:'A process identifying critical business functions and calculating the impact of their disruption, producing metrics like RTO/RPO.'},
{t:'Qualitative Risk Analysis', obj:'5.2', d:'Assigning risk levels like "high," "medium," or "low" based on subjective judgment rather than precise numbers.'},
{t:'Service-Level Agreement (SLA)', obj:'5.3', d:'A contract defining measurable performance expectations, such as uptime, that a vendor commits to meet.'},
{t:'Non-Disclosure Agreement (NDA)', obj:'5.3', d:'A legal contract binding parties to keep specified shared information confidential.'},
{t:'Memorandum of Understanding (MOU)', obj:'5.3', d:'A document expressing a general, often non-binding, understanding of intent between two or more parties.'},
{t:'Statement of Work (SOW)', obj:'5.3', d:'A document defining the specific deliverables, tasks, and timeline for a particular vendor engagement.'},
{t:'GDPR', obj:'5.4', d:'General Data Protection Regulation — an EU regulation governing the collection and protection of personal data.'},
{t:'PCI DSS', obj:'5.4', d:'Payment Card Industry Data Security Standard — a compliance standard for organizations that handle credit card data.'},
{t:'Data Subject', obj:'5.4', d:'Under privacy regulations, the individual whose personal data is being collected and processed.'},
{t:'Unknown Environment Test', obj:'5.5', d:'A penetration test (black-box) where testers are given no prior information, simulating a real external attacker.'},
{t:'Rules of Engagement', obj:'5.5', d:'The formally defined boundaries and permitted actions established before conducting a penetration test.'},
{t:'Active Reconnaissance', obj:'5.5', d:'Directly interacting with or scanning a target system to gather information, as opposed to passive collection.'},
{t:'Operational Security (OPSEC)', obj:'5.6', d:'Practices that protect sensitive operational information from being inadvertently disclosed, including on social media.'},
{t:'Phishing Campaign', obj:'5.6', d:'A scheduled, simulated phishing exercise run against employees to measure and improve detection rates.'},
{t:'Situational Awareness', obj:'5.6', d:'Training that helps employees notice and respond to real-time security risks happening around them.'},
];

/* ============ ACRONYMS ============ */
const ACRONYMS = [
["AAA","Authentication, Authorization, and Accounting","The three-step process of verifying identity, granting permissions, and logging what a user did."],
["ACL","Access Control List","A list of rules attached to a resource (like a firewall or file) that allows or denies specific traffic or users."],
["AES","Advanced Encryption Standard","The current industry-standard symmetric block cipher, widely used to encrypt data at rest and in transit."],
["AES-256","Advanced Encryption Standards 256-bit","AES using a 256-bit key length, offering a very large keyspace and strong resistance to brute-force attacks."],
["AH","Authentication Header","An IPSec protocol that provides integrity and authentication for packets, but not confidentiality (no encryption)."],
["AI","Artificial Intelligence","Computer systems that perform tasks normally requiring human intelligence, increasingly used in both attacks and defenses."],
["AIS","Automated Indicator Sharing","A CISA-run service that lets organizations exchange machine-readable cyber threat indicators in near real time."],
["ALE","Annualized Loss Expectancy","The expected yearly monetary loss from a risk, calculated as SLE multiplied by ARO."],
["AP","Access Point","A device that lets wireless clients connect to a wired network, a common target for wireless attacks."],
["API","Application Programming Interface","A defined interface that lets software components communicate; often automated and a common attack surface if unsecured."],
["APT","Advanced Persistent Threat","A well-resourced, often nation-state-linked attacker that maintains long-term, stealthy access to a target network."],
["ARO","Annualized Rate of Occurrence","The estimated number of times a specific risk event is expected to occur in a year."],
["ARP","Address Resolution Protocol","Resolves IP addresses to MAC addresses on a local network; frequently abused in ARP spoofing/poisoning attacks."],
["ASLR","Address Space Layout Randomization","An OS security feature that randomizes memory addresses to make buffer overflow exploits harder to reliably execute."],
["ATT&CK","Adversarial Tactics, Techniques, and Common Knowledge","A MITRE knowledge base cataloging real-world attacker tactics and techniques, widely used for threat hunting and detection engineering."],
["AUP","Acceptable Use Policy","A policy defining what employees are and are not permitted to do with organizational IT resources."],
["AV","Antivirus","Software that detects, blocks, and removes known malware using signatures and heuristic analysis."],
["BASH","Bourne Again Shell","A common Linux/Unix command-line shell, also used as a scripting language for both administration and attacks."],
["BCP","Business Continuity Planning","Planning that ensures critical business functions can continue during and after a disruptive event."],
["BGP","Border Gateway Protocol","The routing protocol that exchanges reachability information between networks on the internet; a target for route-hijacking attacks."],
["BIA","Business Impact Analysis","A process that identifies critical business functions and calculates the impact of their disruption, producing metrics like RTO and RPO."],
["BIOS","Basic Input/Output System","Legacy firmware that initializes hardware at boot; a target for firmware-level attacks and rootkits."],
["BPA","Business Partners Agreement","A contract defining the terms, responsibilities, and expectations between two business partners."],
["BPDU","Bridge Protocol Data Unit","A Spanning Tree Protocol message exchanged between switches; can be abused in BPDU-based network attacks."],
["BYOD","Bring Your Own Device","A deployment model where employees use their personal devices for work, typically under partial MDM control."],
["CA","Certificate Authority","A trusted entity that issues and signs digital certificates, forming the root of trust in a PKI."],
["CAPTCHA","Completely Automated Public Turing Test to Tell Computers and Humans Apart","A challenge-response test used to block automated bots from abusing web forms or login pages."],
["CAR","Corrective Action Report","A formal document describing the root cause of a problem and the steps taken to fix it."],
["CASB","Cloud Access Security Broker","A security control point between users and cloud services that enforces policy, visibility, and data protection."],
["CBC","Cipher Block Chaining","A block cipher mode where each block is XORed with the previous ciphertext block before encryption."],
["CCMP","Counter Mode/CBC-MAC Protocol","The AES-based encryption protocol used by WPA2 to secure Wi-Fi traffic."],
["CCTV","Closed-circuit Television","Video surveillance cameras used as a physical security control to monitor and deter unauthorized access."],
["CERT","Computer Emergency Response Team","A dedicated team responsible for responding to and coordinating cybersecurity incidents."],
["CFB","Cipher Feedback","A block cipher mode that turns a block cipher into a self-synchronizing stream cipher."],
["CHAP","Challenge Handshake Authentication Protocol","An authentication protocol that verifies identity using a challenge-response exchange instead of sending a password in the clear."],
["CIA","Confidentiality, Integrity, Availability","The three foundational security objectives: keeping data secret, accurate, and accessible when needed."],
["CIO","Chief Information Officer","The senior executive responsible for an organization's overall information technology strategy."],
["CIRT","Computer Incident Response Team","A team responsible for detecting, investigating, and responding to security incidents; synonymous with CSIRT."],
["CMS","Content Management System","Software used to create and manage website content; a common target due to plugin vulnerabilities."],
["COOP","Continuity of Operation Planning","Government/organizational planning to ensure essential functions continue during an emergency."],
["COPE","Corporate Owned, Personally Enabled","A mobile deployment model where the company owns the device but allows personal use."],
["CP","Contingency Planning","Planning for how an organization will respond to and recover from unexpected disruptive events."],
["CRC","Cyclical Redundancy Check","An error-detecting code used to catch accidental changes to data, not a security control against tampering."],
["CRL","Certificate Revocation List","A published list of digital certificates that have been revoked before their expiration date."],
["CSO","Chief Security Officer","The senior executive responsible for an organization's overall physical and information security posture."],
["CSP","Cloud Service Provider","A company that offers cloud computing services (IaaS/PaaS/SaaS), sharing security responsibility with the customer."],
["CSR","Certificate Signing Request","A message sent to a CA to request a signed digital certificate, containing the public key and identity info."],
["CSRF","Cross-site Request Forgery","An attack that tricks an authenticated user's browser into submitting an unwanted request to a trusted site."],
["CSU","Channel Service Unit","A device that terminates a digital circuit at the customer's premises, connecting to a WAN line."],
["CTM","Counter Mode","A block cipher mode that turns a block cipher into a stream cipher using an incrementing counter."],
["CTO","Chief Technology Officer","The senior executive responsible for an organization's technology direction and engineering strategy."],
["CVE","Common Vulnerability Enumeration","A standardized, publicly available dictionary of known vulnerabilities, each with a unique identifier."],
["CVSS","Common Vulnerability Scoring System","A standardized framework that scores vulnerability severity from 0-10 to help prioritize remediation."],
["CYOD","Choose Your Own Device","A mobile deployment model where employees pick a device from a company-approved list."],
["DAC","Discretionary Access Control","An access control model where the resource owner decides who is granted access."],
["DBA","Database Administrator","The role responsible for managing, securing, and maintaining an organization's databases."],
["DDoS","Distributed Denial of Service","An attack that overwhelms a target with traffic from many distributed, often compromised, sources."],
["DEP","Data Execution Prevention","An OS security feature that marks memory regions as non-executable to block certain buffer overflow exploits."],
["DES","Digital Encryption Standard","An older, now-insecure symmetric encryption algorithm with a 56-bit key, superseded by AES."],
["DHCP","Dynamic Host Configuration Protocol","Automatically assigns IP addresses to devices on a network; vulnerable to rogue-server and starvation attacks."],
["DHE","Diffie-Hellman Ephemeral","A key exchange method that generates a new, temporary key pair for each session, providing forward secrecy."],
["DKIM","DomainKeys Identified Mail","Adds a cryptographic signature to outgoing email so receivers can verify it wasn't altered and came from the claimed domain."],
["DLL","Dynamic Link Library","A Windows file containing shared code/resources; a common target for DLL injection and hijacking attacks."],
["DLP","Data Loss Prevention","Tools and policies that detect and block sensitive data from leaving an organization improperly."],
["DMARC","Domain Message Authentication Reporting and Conformance","An email policy standard that tells receivers what to do when SPF/DKIM checks fail, reducing spoofing."],
["DNAT","Destination Network Address Translation","Rewrites the destination address of inbound packets, commonly used to expose an internal server externally."],
["DNS","Domain Name System","Translates human-readable domain names into IP addresses; a frequent target for cache poisoning and hijacking."],
["DoS","Denial of Service","An attack from a single source that disrupts a service's availability, e.g., by exhausting resources."],
["DPO","Data Privacy Officer","The role responsible for overseeing an organization's data protection strategy and regulatory compliance."],
["DRP","Disaster Recovery Plan","A documented plan for restoring IT systems and operations after a major disruptive event."],
["DSA","Digital Signature Algorithm","A public-key algorithm used specifically to create digital signatures for authentication and integrity."],
["DSL","Digital Subscriber Line","A technology that delivers internet access over traditional copper telephone lines."],
["EAP","Extensible Authentication Protocol","A flexible authentication framework used in wireless and point-to-point connections, supporting many authentication methods."],
["ECB","Electronic Code Book","A weak block cipher mode that encrypts identical plaintext blocks into identical ciphertext, leaking patterns."],
["ECC","Elliptic Curve Cryptography","A public-key cryptography approach that provides strong security with much smaller key sizes than RSA."],
["ECDHE","Elliptic Curve Diffie-Hellman Ephemeral","An elliptic-curve key exchange that generates temporary keys per session, providing forward secrecy."],
["ECDSA","Elliptic Curve Digital Signature Algorithm","A digital signature algorithm based on elliptic curve cryptography, offering strong security with smaller keys."],
["EDR","Endpoint Detection and Response","Tools that continuously monitor endpoints for threats and provide investigation and automated response capabilities."],
["EFS","Encrypted File System","A Windows feature that transparently encrypts individual files and folders on disk."],
["ERP","Enterprise Resource Planning","Integrated business management software (finance, HR, supply chain) that is a high-value target if compromised."],
["ESN","Electronic Serial Number","A unique identifier historically assigned to mobile devices, now largely replaced by IMEI."],
["ESP","Encapsulated Security Payload","An IPSec protocol that provides confidentiality, integrity, and authentication for VPN traffic."],
["FACL","File System Access Control List","Fine-grained permissions attached directly to a file or folder, beyond basic owner/group/other permissions."],
["FDE","Full Disk Encryption","Encryption applied to an entire storage volume, protecting all data if the device is lost or stolen."],
["FIM","File Integrity Management","Monitoring that detects unauthorized changes to critical files by comparing them against a known-good baseline."],
["FPGA","Field Programmable Gate Array","A reconfigurable hardware chip, sometimes used to accelerate cryptographic operations or specialized security appliances."],
["FRR","False Rejection Rate","In biometrics, the rate at which a legitimate user is incorrectly denied access."],
["FTP","File Transfer Protocol","An unencrypted protocol for transferring files; credentials and data are sent in plaintext, a security risk."],
["FTPS","Secured File Transfer Protocol","FTP secured with TLS/SSL encryption to protect credentials and data in transit."],
["GCM","Galois Counter Mode","An authenticated encryption mode (used with AES) that provides both confidentiality and integrity in one pass."],
["GDPR","General Data Protection Regulation","An EU regulation governing the collection, processing, and protection of personal data, including the right to be forgotten."],
["GPG","Gnu Privacy Guard","A free, open-source implementation of the OpenPGP standard for encrypting and signing data/email."],
["GPO","Group Policy Object","A Windows Active Directory feature used to centrally enforce security and configuration settings across many computers."],
["GPS","Global Positioning System","Satellite-based positioning used for geolocation, which can be used for geofencing-based access controls."],
["GPU","Graphics Processing Unit","Specialized processing hardware; besides graphics, it's heavily used to accelerate password cracking and brute-force attacks."],
["GRE","Generic Routing Encapsulation","A tunneling protocol that encapsulates various network layer protocols, often paired with IPSec for security."],
["HA","High Availability","An architecture design goal ensuring systems remain operational with minimal downtime, often via redundancy and failover."],
["HDD","Hard Disk Drive","Traditional spinning magnetic storage media; secure disposal requires proper sanitization or physical destruction."],
["HIDS","Host-based Intrusion Detection System","Software that monitors a single host for signs of malicious activity or policy violations."],
["HIPS","Host-based Intrusion Prevention System","Software that monitors a single host and actively blocks detected malicious activity."],
["HMAC","Hashed Message Authentication Code","A construction that combines a cryptographic hash with a secret key to verify message integrity and authenticity."],
["HOTP","HMAC-based One-time Password","A one-time password algorithm based on a counter and HMAC, used in some MFA hardware tokens."],
["HSM","Hardware Security Module","A dedicated, tamper-resistant hardware appliance that generates, stores, and protects cryptographic keys."],
["HTML","Hypertext Markup Language","The standard markup language for web pages; improper handling of HTML input enables XSS attacks."],
["HTTP","Hypertext Transfer Protocol","The unencrypted protocol used to transfer web content; data is sent in plaintext."],
["HTTPS","Hypertext Transfer Protocol Secure","HTTP secured with TLS encryption, protecting web traffic confidentiality and integrity."],
["HVAC","Heating, Ventilation Air Conditioning","Environmental control systems that, if compromised or failed, can damage equipment in a data center."],
["IaaS","Infrastructure as a Service","A cloud model providing virtualized compute, storage, and networking; the customer secures the OS and above."],
["IaC","Infrastructure as Code","Managing and provisioning infrastructure through versioned, machine-readable definition files instead of manual configuration."],
["IAM","Identity and Access Management","The overall discipline and toolset for managing digital identities and controlling their access to resources."],
["ICMP","Internet Control Message Protocol","Used for network diagnostics (like ping); can be abused for reconnaissance or ICMP flood DoS attacks."],
["ICS","Industrial Control Systems","Systems that manage industrial processes (manufacturing, utilities); often legacy and difficult to patch."],
["IDEA","International Data Encryption Algorithm","An older symmetric block cipher, notably used in early versions of PGP."],
["IDF","Intermediate Distribution Frame","A cabling cross-connect point in a building that links to the main distribution frame."],
["IdP","Identity Provider","The system that authenticates a user's identity and issues assertions used for SSO/federation."],
["IDS","Intrusion Detection System","A system that monitors network or host activity and alerts on suspicious behavior, without blocking it."],
["IEEE","Institute of Electrical and Electronics Engineers","The standards body behind many networking specifications, including 802.1X (port-based access control) and 802.11 (Wi-Fi)."],
["IKE","Internet Key Exchange","The protocol used to negotiate and establish the security association and keys for an IPSec VPN."],
["IM","Instant Messaging","Real-time text communication; a message-based threat vector for phishing and malware links."],
["IMAP","Internet Message Access Protocol","A protocol for retrieving email from a mail server; should be used over a TLS-secured connection."],
["IoC","Indicators of Compromise","Observable artifacts (file hashes, IPs, domains) that suggest a system has been breached."],
["IoT","Internet of Things","Network-connected everyday devices, often with weak default security and a large attack surface."],
["IP","Internet Protocol","The core protocol responsible for addressing and routing packets across networks."],
["IPS","Intrusion Prevention System","A system that monitors traffic and actively blocks detected malicious activity in real time."],
["IPSec","Internet Protocol Security","A protocol suite that authenticates and encrypts IP packets, commonly used to build VPN tunnels."],
["IR","Incident Response","The organized process of detecting, containing, eradicating, and recovering from a security incident."],
["IRC","Internet Relay Chat","An older real-time chat protocol, historically abused as a command-and-control channel for botnets."],
["IRP","Incident Response Plan","The documented plan defining roles, procedures, and steps to follow during a security incident."],
["ISO","International Standards Organization","An international body that publishes standards, including ISO 27001 for information security management."],
["ISP","Internet Service Provider","The company that provides an organization or individual with internet connectivity."],
["ISSO","Information Systems Security Officer","The individual responsible for ensuring a specific system's security policies and controls are properly implemented."],
["IV","Initialization Vector","A random or unique value used with a cipher to ensure identical plaintexts don't produce identical ciphertext."],
["KDC","Key Distribution Center","The trusted third party in Kerberos authentication that issues session tickets and keys."],
["KEK","Key Encryption Key","A key whose sole purpose is to encrypt other cryptographic keys, adding a layer of key protection."],
["L2TP","Layer 2 Tunneling Protocol","A VPN tunneling protocol that itself provides no encryption, so it's typically paired with IPSec."],
["LAN","Local Area Network","A network confined to a limited area like an office, as opposed to a WAN."],
["LDAP","Lightweight Directory Access Protocol","A protocol used to query and authenticate against centralized directory services like Active Directory."],
["LEAP","Lightweight Extensible Authentication Protocol","A Cisco-proprietary EAP method for wireless authentication with known weaknesses to offline attacks."],
["MaaS","Monitoring as a Service","A cloud-delivered service that provides infrastructure and application monitoring without managing the tooling in-house."],
["MAC","Mandatory Access Control","An access control model where a central authority assigns access based on data sensitivity labels, not owner discretion."],
["MAC","Media Access Control","The unique hardware address assigned to a network interface, used for addressing at the data link layer."],
["MAC","Message Authentication Code","A short cryptographic value derived from a message and secret key, used to verify integrity and authenticity."],
["MAN","Metropolitan Area Network","A network spanning a larger area than a LAN, such as a city, but smaller than a WAN."],
["MBR","Master Boot Record","The boot sector of a legacy disk; a common target for boot-level rootkits and ransomware."],
["MD5","Message Digest 5","An older cryptographic hash algorithm that is now considered broken and unsuitable for security use."],
["MDF","Main Distribution Frame","The central cabling termination point in a building's network infrastructure."],
["MDM","Mobile Device Management","Software that lets organizations enforce policy, security settings, and remote wipe on managed mobile devices."],
["MFA","Multifactor Authentication","Authentication requiring two or more independent factors (know/have/are/somewhere) to verify identity."],
["MFD","Multifunction Device","An office device combining printing, scanning, and faxing; often overlooked as a network attack surface."],
["MFP","Multifunction Printer","Another term for a multifunction device combining print, scan, copy, and fax capability."],
["ML","Machine Learning","A subset of AI that learns patterns from data, used in both threat detection and malicious tooling."],
["MMS","Multimedia Message Service","A messaging protocol for sending media (images, video); a threat vector similar to SMS/smishing."],
["MOA","Memorandum of Agreement","A formal document describing a cooperative relationship between parties, more binding than an MOU."],
["MOU","Memorandum of Understanding","A document expressing a general, often non-binding, understanding of intent between two or more parties."],
["MPLS","Multi-protocol Label Switching","A WAN routing technique that speeds traffic using labels instead of full routing table lookups."],
["MSA","Master Service Agreement","An overarching contract establishing the general terms that govern future work between two parties."],
["MSCHAP","Microsoft Challenge Handshake Authentication Protocol","Microsoft's version of CHAP, historically used in VPN/remote access authentication."],
["MSP","Managed Service Provider","A third-party company that remotely manages a customer's IT infrastructure, a notable supply-chain risk vector."],
["MSSP","Managed Security Service Provider","A third-party company that delivers outsourced security monitoring and management services."],
["MTBF","Mean Time Between Failures","The average operating time between failures of a repairable system, used as a reliability/BIA metric."],
["MTTF","Mean Time to Failure","The average expected lifespan of a non-repairable component before it fails."],
["MTTR","Mean Time to Recover","The average time it takes to restore a system to operation after a failure."],
["MTU","Maximum Transmission Unit","The largest packet size a network link can carry without fragmentation."],
["NAC","Network Access Control","Enforces device posture and policy compliance (patch level, AV status, etc.) before granting network access."],
["NAT","Network Address Translation","Translates private internal IP addresses to a public address, also providing a degree of network obscurity."],
["NDA","Non-disclosure Agreement","A legal contract binding parties to keep specified shared information confidential."],
["NFC","Near Field Communication","A short-range wireless technology used for contactless payments and access badges, vulnerable to relay attacks."],
["NGFW","Next-generation Firewall","A firewall that inspects traffic at the application layer, adding features like IPS and identity awareness."],
["NIDS","Network-based Intrusion Detection System","Monitors network traffic across a segment for malicious activity and alerts without blocking it."],
["NIPS","Network-based Intrusion Prevention System","Monitors network traffic across a segment and actively blocks detected malicious activity."],
["NIST","National Institute of Standards & Technology","A U.S. federal agency that publishes widely adopted cybersecurity frameworks and standards, like the NIST CSF."],
["NTFS","New Technology File System","The default Windows file system, which supports file-level permissions (ACLs) and encryption (EFS)."],
["NTLM","New Technology LAN Manager","An older Microsoft authentication protocol with known weaknesses, largely superseded by Kerberos."],
["NTP","Network Time Protocol","Synchronizes clocks across systems; accurate time is critical for reliable log correlation and Kerberos authentication."],
["OAUTH","Open Authorization","An authorization framework that lets applications access resources on a user's behalf without sharing their password."],
["OCSP","Online Certificate Status Protocol","Allows real-time checking of a single certificate's revocation status, faster than downloading a full CRL."],
["OID","Object Identifier","A globally unique identifier used in X.509 certificates and directory schemas to name an object type."],
["OS","Operating System","The core software that manages hardware and provides the platform other software runs on."],
["OSINT","Open-source Intelligence","Information gathered from publicly available sources, used in both reconnaissance and threat intelligence."],
["OSPF","Open Shortest Path First","A link-state interior routing protocol used within an autonomous network."],
["OT","Operational Technology","Hardware and software that monitors and controls physical industrial processes, such as ICS/SCADA environments."],
["OTA","Over the Air","Wireless delivery of updates or configuration to mobile devices, which must be secured against tampering."],
["OVAL","Open Vulnerability Assessment Language","A standardized XML-based language for describing system security states, used in vulnerability scanning."],
["P12","PKCS #12","A file format used to bundle a private key with its certificate for storage or transport."],
["P2P","Peer to Peer","A decentralized network model where nodes communicate directly, historically abused for malware distribution."],
["PaaS","Platform as a Service","A cloud model providing a managed platform for building applications; the provider secures the underlying OS."],
["PAC","Proxy Auto Configuration","A file that tells a browser which proxy server to use for a given URL."],
["PAM","Privileged Access Management","Tools and practices that secure, monitor, and time-limit access to privileged/administrative accounts."],
["PAM","Pluggable Authentication Modules","A Linux/Unix framework that lets administrators configure authentication methods independently of applications."],
["PAP","Password Authentication Protocol","A weak authentication protocol that sends credentials in plaintext, largely deprecated in favor of CHAP."],
["PAT","Port Address Translation","A form of NAT that maps many internal addresses to one public IP using different port numbers."],
["PBKDF2","Password-based Key Derivation Function 2","A key-stretching algorithm that repeatedly hashes a password to slow down brute-force attacks."],
["PBX","Private Branch Exchange","An organization's internal telephone switching system, which can be a target for toll fraud or eavesdropping."],
["PCAP","Packet Capture","A raw recording of network traffic, used by analysts to investigate and reconstruct communications."],
["PCI DSS","Payment Card Industry Data Security Standard","A compliance standard defining security requirements for organizations that handle credit card data."],
["PDU","Power Distribution Unit","A device that distributes electrical power to equipment in a data center rack."],
["PEAP","Protected Extensible Authentication Protocol","An EAP method that wraps authentication inside a TLS tunnel for added protection on wireless networks."],
["PED","Personal Electronic Device","Any personal device (phone, tablet, wearable) that may connect to or be brought into a secure environment."],
["PEM","Privacy Enhanced Mail","A common Base64-encoded file format used to store certificates and keys."],
["PFS","Perfect Forward Secrecy","A property of key exchange ensuring that a compromised long-term key can't decrypt past session traffic."],
["PGP","Pretty Good Privacy","A widely used encryption program for signing and encrypting email and files."],
["PHI","Personal Health Information","Health-related data tied to an individual, protected under regulations such as HIPAA."],
["PII","Personally Identifiable Information","Any data that can be used to identify a specific individual, requiring strong protection."],
["PIV","Personal Identity Verification","A U.S. federal standard for secure, smart card-based identity credentials."],
["PKCS","Public Key Cryptography Standards","A group of standards published by RSA Labs that define conventions for public-key cryptography."],
["PKI","Public Key Infrastructure","The framework of CAs, certificates, and policies used to manage and trust public-key encryption."],
["POP","Post Office Protocol","An older protocol for retrieving email, typically downloading and removing messages from the server."],
["POTS","Plain Old Telephone Service","The traditional analog telephone system, still relevant for some out-of-band alerting and fallback links."],
["PPP","Point-to-Point Protocol","A data link protocol used to establish a direct connection between two network nodes."],
["PPTP","Point-to-Point Tunneling Protocol","An older, now considered insecure, VPN tunneling protocol largely replaced by IPSec/TLS-based options."],
["PSK","Pre-shared Key","A secret key shared in advance between parties, used in WPA2-Personal Wi-Fi and some VPNs."],
["PTZ","Pan-tilt-zoom","A type of surveillance camera that can be remotely controlled to pan, tilt, and zoom."],
["PUP","Potentially Unwanted Program","Software that isn't outright malicious but is unwanted, such as adware or bundled toolbars."],
["RA","Recovery Agent","A designated role/key authorized to recover encrypted data if the original key is lost."],
["RA","Registration Authority","An entity that verifies certificate requestor identities on behalf of a Certificate Authority."],
["RACE","Research and Development in Advanced Communications Technologies in Europe","A European research program from which some early cryptographic standards (like RIPEMD) originated."],
["RAD","Rapid Application Development","A software development approach emphasizing quick iteration, which must still incorporate security in the SDLC."],
["RADIUS","Remote Authentication Dial-in User Service","A centralized AAA protocol commonly used to authenticate users for network and VPN access."],
["RAID","Redundant Array of Inexpensive Disks","A method of combining multiple disks for redundancy and/or performance, supporting resilience and fault tolerance."],
["RAS","Remote Access Server","A server that provides and manages remote connections into a private network."],
["RAT","Remote Access Trojan","Malware that gives an attacker covert remote control over an infected system."],
["RBAC","Role-based Access Control","An access control model that grants permissions based on a user's assigned job role."],
["RBAC","Rule-based Access Control","An access control model that grants or denies access based on a set of administrator-defined rules."],
["RC4","Rivest Cipher version 4","An older stream cipher with known weaknesses, now deprecated for secure use."],
["RDP","Remote Desktop Protocol","A Microsoft protocol for remotely controlling a Windows system's desktop; a frequent target for brute-force attacks."],
["RFID","Radio Frequency Identifier","Wireless tag technology used in access badges and inventory tracking, vulnerable to cloning attacks."],
["RIPEMD","RACE Integrity Primitives Evaluation Message Digest","A cryptographic hash function developed as part of the RACE research program."],
["ROI","Return on Investment","A financial metric measuring the value gained relative to the cost of a security investment."],
["RPO","Recovery Point Objective","The maximum acceptable amount of data loss, measured in time, used in business impact analysis."],
["RSA","Rivest, Shamir, & Adleman","A widely used public-key algorithm for encryption and digital signatures, named after its creators."],
["RTBH","Remotely Triggered Black Hole","A mitigation technique that drops traffic to/from a target IP at the network edge, often used against DDoS."],
["RTO","Recovery Time Objective","The maximum acceptable amount of downtime after an incident, used in business impact analysis."],
["RTOS","Real-time Operating System","An OS designed for deterministic, time-critical processing, common in embedded and industrial control systems."],
["RTP","Real-time Transport Protocol","A protocol for delivering real-time audio/video, such as VoIP calls, over a network."],
["S/MIME","Secure/Multipurpose Internet Mail Extensions","A standard for encrypting and digitally signing email messages using certificates."],
["SaaS","Software as a Service","A cloud model delivering fully managed applications, where the provider secures nearly the entire stack."],
["SAE","Simultaneous Authentication of Equals","The secure key exchange method used by WPA3 to replace WPA2's vulnerable PSK handshake."],
["SAML","Security Assertions Markup Language","An XML-based standard for exchanging authentication and authorization assertions, commonly used for SSO."],
["SAN","Storage Area Network","A dedicated high-speed network providing block-level access to shared storage."],
["SAN","Subject Alternative Name","A certificate extension listing additional hostnames/identities a certificate is valid for."],
["SASE","Secure Access Service Edge","An architecture converging SD-WAN networking with cloud-delivered security services into a single service."],
["SCADA","Supervisory Control and Data Acquisition","A system for monitoring and controlling industrial processes across large geographic areas."],
["SCAP","Security Content Automation Protocol","A standardized suite of specifications for automating vulnerability and configuration compliance checking."],
["SCEP","Simple Certificate Enrollment Protocol","A protocol that automates the process of requesting and issuing digital certificates, often for devices."],
["SD-WAN","Software-defined Wide Area Network","Software-managed WAN connectivity that can dynamically route traffic across multiple transport links."],
["SDK","Software Development Kit","A set of tools and libraries for building applications on a given platform."],
["SDLC","Software Development Lifecycle","The structured process for planning, building, testing, and maintaining software, which should embed security at each phase."],
["SDLM","Software Development Lifecycle Methodology","A specific structured approach (e.g., Agile, Waterfall) used to organize the software development lifecycle."],
["SDN","Software-defined Networking","An architecture that separates the network control plane from the data plane, enabling centralized programmable control."],
["SE Linux","Security-enhanced Linux","A Linux kernel security module that enforces mandatory access control policies beyond standard permissions."],
["SED","Self-encrypting Drives","Storage drives with built-in hardware encryption that protects data automatically at rest."],
["SEH","Structured Exception Handler","A Windows error-handling mechanism that has historically been a target for exploit techniques like SEH overwrite attacks."],
["SFTP","Secured File Transfer Protocol","A file transfer protocol that runs over SSH, encrypting both credentials and data."],
["SHA","Secure Hashing Algorithm","A family of cryptographic hash functions (e.g., SHA-256) used for integrity verification and digital signatures."],
["SHTTP","Secure Hypertext Transfer Protocol","An older, largely obsolete alternative to HTTPS for securing web traffic."],
["SIEM","Security Information and Event Management","Centralizes and correlates logs from many sources to detect and alert on security events."],
["SIM","Subscriber Identity Module","The chip that identifies a subscriber on a cellular network; vulnerable to SIM-swapping attacks."],
["SLA","Service-level Agreement","A contract defining measurable performance expectations, such as uptime, that a vendor commits to."],
["SLE","Single Loss Expectancy","The expected monetary loss from a single occurrence of a risk, calculated as asset value times exposure factor."],
["SMS","Short Message Service","Text messaging; a common vector for smishing (SMS phishing) attacks."],
["SMTP","Simple Mail Transfer Protocol","The protocol used to send email; unencrypted by default and often abused for spam and spoofing."],
["SMTPS","Simple Mail Transfer Protocol Secure","SMTP secured with TLS encryption to protect email in transit."],
["SNMP","Simple Network Management Protocol","A protocol for monitoring and managing network devices; older versions send community strings in plaintext."],
["SOAP","Simple Object Access Protocol","An XML-based messaging protocol used for exchanging structured information between web services."],
["SOAR","Security Orchestration, Automation, Response","Platforms that automate and orchestrate incident response workflows to reduce manual analyst effort."],
["SoC","System on Chip","An integrated circuit combining CPU, memory, and other components on a single chip, common in mobile/embedded devices."],
["SOC","Security Operations Center","A centralized team and facility responsible for continuous monitoring, detection, and response to security events."],
["SOW","Statement of Work","A document defining the specific deliverables, tasks, and timeline for a vendor engagement."],
["SPF","Sender Policy Framework","A DNS record listing which mail servers are authorized to send email for a domain, helping prevent spoofing."],
["SPIM","Spam over Internet Messaging","Unsolicited spam messages sent via instant messaging platforms rather than email."],
["SQL","Structured Query Language","The standard language for querying and managing relational databases."],
["SQLi","SQL Injection","An attack that inserts malicious SQL statements into input fields to manipulate a backend database."],
["SRTP","Secure Real-Time Protocol","An encrypted version of RTP used to protect voice/video call confidentiality and integrity."],
["SSD","Solid State Drive","Flash-based storage media; secure erasure differs from traditional HDDs and requires specific sanitization methods."],
["SSH","Secure Shell","An encrypted protocol for secure remote command-line access and file transfer, replacing insecure Telnet/FTP."],
["SSL","Secure Sockets Layer","The predecessor to TLS for encrypting network traffic; now deprecated due to known vulnerabilities."],
["SSO","Single Sign-on","Lets a user authenticate once and gain access to multiple independent systems without re-entering credentials."],
["STIX","Structured Threat Information eXchange","A standardized language for describing cyber threat intelligence in a structured, shareable format."],
["SWG","Secure Web Gateway","A control point that filters and inspects outbound web traffic to enforce policy and block threats."],
["TACACS+","Terminal Access Controller Access Control System","A Cisco AAA protocol that separates authentication, authorization, and accounting, commonly used for device administration."],
["TAXII","Trusted Automated eXchange of Indicator Information","A transport protocol used to share STIX threat intelligence data between systems."],
["TCP/IP","Transmission Control Protocol/Internet Protocol","The foundational protocol suite that governs how data is addressed, transmitted, and routed across networks."],
["TGT","Ticket Granting Ticket","In Kerberos authentication, an initial ticket that lets a user request access to other services without re-entering credentials."],
["TKIP","Temporal Key Integrity Protocol","An encryption protocol used by WPA to replace WEP's weak key scheme; itself now deprecated."],
["TLS","Transport Layer Security","The current standard protocol for encrypting network traffic, such as HTTPS web connections."],
["TOC","Time-of-check","The moment a system checks a resource's state, relevant to TOCTOU race condition vulnerabilities."],
["TOTP","Time-based One-time Password","A one-time password algorithm that generates a new code every 30-60 seconds, common in MFA apps."],
["TOU","Time-of-use","The moment a system actually uses a resource, relevant to TOCTOU race condition vulnerabilities."],
["TPM","Trusted Platform Module","A hardware chip on a device that securely generates and stores cryptographic keys, enabling full-disk encryption features like BitLocker."],
["TTP","Tactics, Techniques, and Procedures","The behavioral patterns and methods used by a specific threat actor, used to profile and detect them."],
["TSIG","Transaction Signature","A mechanism that cryptographically authenticates DNS updates and transfers between servers."],
["UAT","User Acceptance Testing","The final stage of testing where end users validate that software meets requirements before release."],
["UAV","Unmanned Aerial Vehicle","A drone; a physical security consideration for aerial surveillance or unauthorized wireless attacks."],
["UDP","User Datagram Protocol","A connectionless transport protocol that's faster but less reliable than TCP, and easily spoofed."],
["UEFI","Unified Extensible Firmware Interface","Modern firmware that replaced legacy BIOS, supporting Secure Boot to prevent unauthorized OS/bootloader tampering."],
["UEM","Unified Endpoint Management","A platform that manages and secures all device types (mobile, desktop, IoT) from a single console."],
["UPS","Uninterruptable Power Supply","A battery backup device that keeps systems running briefly during a power outage, supporting availability."],
["URI","Uniform Resource Identifier","A generic string that identifies a resource, of which a URL is one specific type."],
["URL","Universal Resource Locator","A web address; URL scanning/filtering is used to block access to malicious sites."],
["USB","Universal Serial Bus","A common hardware interface; removable USB devices are a major vector for malware and data exfiltration."],
["USB OTG","USB On the Go","A USB standard that lets mobile devices act as a host to other USB peripherals."],
["UTM","Unified Threat Management","An appliance that bundles multiple security functions (firewall, IPS, content filtering) into a single device."],
["UTP","Unshielded Twisted Pair","A common type of network cabling without additional electromagnetic shielding."],
["VBA","Visual Basic","A scripting language embedded in Microsoft Office; commonly abused to deliver macro-based malware."],
["VDE","Virtual Desktop Environment","A virtualized desktop workspace delivered from a central server rather than run locally."],
["VDI","Virtual Desktop Infrastructure","The technology that hosts and delivers virtual desktops to end users from a data center."],
["VLAN","Virtual Local Area Network","A logically segmented network within a physical network, used to isolate and contain traffic."],
["VLSM","Variable Length Subnet Masking","A technique for allocating IP subnets of different sizes to use address space more efficiently."],
["VM","Virtual Machine","An emulated computer system running on a hypervisor, vulnerable to VM escape attacks if misconfigured."],
["VoIP","Voice over IP","Voice calls carried over an IP network rather than traditional phone lines; a target for eavesdropping and vishing."],
["VPC","Virtual Private Cloud","An isolated, private section of a public cloud provider's infrastructure dedicated to one customer."],
["VPN","Virtual Private Network","Creates an encrypted tunnel over an untrusted network, protecting remote access traffic confidentiality."],
["VTC","Video Teleconferencing","Video-based meeting technology, which introduces risks like uninvited access ('zoombombing') if not secured."],
["WAF","Web Application Firewall","A firewall that filters and monitors HTTP traffic specifically to block attacks like SQLi and XSS."],
["WAP","Wireless Access Point","A device that lets wireless clients connect to a wired network; also written as AP."],
["WEP","Wired Equivalent Privacy","An outdated, cryptographically broken Wi-Fi security protocol that should never be used today."],
["WIDS","Wireless Intrusion Detection System","Monitors wireless spectrum for rogue access points and attacks, alerting without blocking."],
["WIPS","Wireless Intrusion Prevention System","Monitors wireless spectrum for rogue access points and attacks, actively blocking them."],
["WO","Work Order","A document authorizing and describing specific work to be performed, often tied to a SOW."],
["WPA","Wi-Fi Protected Access","A wireless security protocol that replaced WEP; superseded by WPA2 and WPA3."],
["WPS","Wi-Fi Protected Setup","A feature meant to simplify Wi-Fi setup that has known PIN brute-force vulnerabilities."],
["WTLS","Wireless TLS","A transport security protocol adapted for older, bandwidth-constrained wireless devices."],
["XDR","Extended Detection and Response","Extends EDR by correlating telemetry across endpoints, network, and cloud for broader threat detection."],
["XML","Extensible Markup Language","A markup language for structured data exchange; vulnerable to XML injection and XXE attacks if unvalidated."],
["XOR","Exclusive Or","A logical/bitwise operation that is a fundamental building block of many stream ciphers and one-time pads."],
["XSRF","Cross-site Request Forgery","Alternate abbreviation for CSRF, an attack that tricks a user's browser into an unwanted authenticated request."],
["XSS","Cross-site Scripting","An attack that injects malicious scripts into trusted web pages, executing in another user's browser."]
];

/* ============ QUESTION GENERATOR ============
   Rather than hand-authoring hundreds of near-duplicate questions (slow to write,
   easy to get subtly wrong), we derive a large, accurate supplemental question set
   from the authoritative ACRONYMS and FLASHCARDS reference data already on the page.
   Every acronym is mapped to its objective through an explicit, human-reviewed table
   (not a keyword guess) so tagging is verifiable. Anything that doesn't map cleanly to
   one of the 28 numbered objectives is left untagged (obj:null) and is clearly labeled
   "General reference" in the UI, rather than being force-fit or randomly assigned. */
function pickDistractors(correctVal, pool, n){
  const opts = shuffle(pool.filter(v=>v!==correctVal));
  return opts.slice(0,n);
}

// Keyed by the acronym itself. Safe for every acronym EXCEPT the handful that appear
// more than once in ACRONYMS with genuinely different meanings (MAC, SAN) — those are
// resolved by exact expansion text in OVERRIDES_BY_FULL instead, checked first.
const OVERRIDES_BY_FULL = {
  'Mandatory Access Control':'4.6',
  'Media Access Control':'3.2',
  'Message Authentication Code':'1.4',
  'Storage Area Network':'3.1',
  'Subject Alternative Name':'1.4',
};
const OVERRIDES_BY_ACR = {
  // 1.4 Cryptographic solutions
  AES:'1.4', 'AES-256':'1.4', CA:'1.4', CBC:'1.4', CCMP:'1.4', CFB:'1.4', CRL:'1.4', CSR:'1.4', CTM:'1.4',
  DES:'1.4', DHE:'1.4', DSA:'1.4', ECB:'1.4', ECC:'1.4', ECDHE:'1.4', ECDSA:'1.4', EFS:'1.4', FDE:'1.4',
  GCM:'1.4', GPG:'1.4', HMAC:'1.4', HSM:'1.4', IDEA:'1.4', IV:'1.4', KDC:'1.4', KEK:'1.4', MD5:'1.4',
  OCSP:'1.4', OID:'1.4', P12:'1.4', PEM:'1.4', PFS:'1.4', PGP:'1.4', PKCS:'1.4', PKI:'1.4', RC4:'1.4',
  RSA:'1.4', SCEP:'1.4', SED:'1.4', SHA:'1.4', 'S/MIME':'1.4', TPM:'1.4', XOR:'1.4', RA:'1.4',
  // 3.2 Secure enterprise infrastructure (protocols, network appliances, tunneling)
  ARP:'3.2', AH:'3.2', BGP:'3.2', BPDU:'3.2', CASB:'3.2', DNAT:'3.2', DNS:'3.2', DHCP:'3.2', ESP:'3.2',
  GRE:'3.2', HTTP:'3.2', HTTPS:'3.2', ICMP:'3.2', IKE:'3.2', IMAP:'3.2', IP:'3.2', IPSec:'3.2', L2TP:'3.2',
  LAN:'3.2', MAN:'3.2', MPLS:'3.2', NAT:'3.2', NGFW:'3.2', OSPF:'3.2', PAC:'3.2', PAT:'3.2', POP:'3.2',
  PPP:'3.2', PPTP:'3.2', PSK:'3.2', RDP:'3.2', RAS:'3.2', SASE:'3.2', SFTP:'3.2', FTPS:'3.2', SHTTP:'3.2',
  SMTP:'3.2', SMTPS:'3.2', SRTP:'3.2', SSH:'3.2', SSL:'3.2', 'SD-WAN':'3.2', 'TCP/IP':'3.2', TLS:'3.2',
  UDP:'3.2', UTP:'3.2', VLAN:'3.2', VLSM:'3.2', VPN:'3.2', WAP:'3.2', WAF:'3.2',
  // 4.5 Enterprise capabilities (email security, filtering, DLP, EDR/XDR)
  DMARC:'4.5', DKIM:'4.5', SPF:'4.5', DLP:'4.5', EDR:'4.5', XDR:'4.5', ACL:'4.5', UTM:'4.5', NAC:'4.5', URL:'4.5',
  // 4.6 Identity and access management
  IAM:'4.6', IdP:'4.6', LDAP:'4.6', LEAP:'4.6', MSCHAP:'4.6', NTLM:'4.6', OAUTH:'4.6', PAP:'4.6', PAM:'4.6',
  PEAP:'4.6', PIV:'4.6', RADIUS:'4.6', RBAC:'4.6', SAE:'4.6', SAML:'4.6', SSO:'4.6', 'TACACS+':'4.6',
  CHAP:'4.6', EAP:'4.6', DAC:'4.6', HOTP:'4.6', TOTP:'4.6', TGT:'4.6', FACL:'4.6',
  // 4.4 Alerting and monitoring
  SIEM:'4.4', SCAP:'4.4', SOC:'4.4', SNMP:'4.4',
  // 4.9 Data sources for investigations
  PCAP:'4.9',
  // 4.3 Vulnerability management
  CVE:'4.3', CVSS:'4.3', OVAL:'4.3', OSINT:'4.3', AIS:'4.3', STIX:'4.3', TAXII:'4.3',
  // 2.1 Threat actors and motivations
  APT:'2.1', TTP:'2.1',
  // 4.8 Incident response
  CERT:'4.8', CIRT:'4.8', IR:'4.8', IRP:'4.8', 'ATT&CK':'4.8',
  // 2.2 Threat vectors and attack surfaces
  IM:'2.2', MMS:'2.2', VoIP:'2.2', SPIM:'2.2',
  // 2.4 Indicators of malicious activity
  DDoS:'2.4', DoS:'2.4', XSRF:'2.4', CSRF:'2.4', RAT:'2.4', PUP:'2.4', IoC:'2.4',
  // 2.5 Mitigation techniques
  RTBH:'2.5', ASLR:'2.5', DEP:'2.5',
  // 2.3 Vulnerabilities
  BIOS:'2.3', UEFI:'2.3', DLL:'2.3', SEH:'2.3', MBR:'2.3',
  // 3.1 Architecture models
  IaaS:'3.1', IaC:'3.1', PaaS:'3.1', SaaS:'3.1', ICS:'3.1', SCADA:'3.1', RTOS:'3.1', IoT:'3.1',
  VDE:'3.1', VDI:'3.1', VM:'3.1', VPC:'3.1', SoC:'3.1', HA:'3.1', OT:'3.1',
  // 3.4 Resilience and recovery
  BCP:'3.4', COOP:'3.4', DRP:'3.4', CP:'3.4', RAID:'3.4', UPS:'3.4',
  // 5.2 Risk management (includes BIA metrics)
  ALE:'5.2', ARO:'5.2', SLE:'5.2', BIA:'5.2', MTBF:'5.2', MTTF:'5.2', MTTR:'5.2', RPO:'5.2', RTO:'5.2',
  // 4.1 Security techniques for mobile/wireless
  BYOD:'4.1', CYOD:'4.1', COPE:'4.1', MDM:'4.1', NFC:'4.1', OTA:'4.1', PED:'4.1', SIM:'4.1', UEM:'4.1',
  WEP:'4.1', WPA:'4.1', WPS:'4.1', WTLS:'4.1', WIDS:'4.1', WIPS:'4.1', TKIP:'4.1',
  // 1.2 Fundamental security concepts (physical security)
  PTZ:'1.2', CCTV:'1.2',
  // 4.7 Automation and orchestration
  API:'4.7',
  // 5.1 Security governance
  AUP:'5.1', CIO:'5.1', CSO:'5.1', CTO:'5.1', CAR:'5.1', DPO:'5.1', ISSO:'5.1', ISO:'5.1', NIST:'5.1',
  RAD:'5.1', UAT:'5.1', SDLC:'5.1', SDLM:'5.1',
  // 5.3 Third-party risk management
  BPA:'5.3', MSA:'5.3', MOA:'5.3', MOU:'5.3', NDA:'5.3', SLA:'5.3', WO:'5.3', CSP:'5.3', MSP:'5.3', MSSP:'5.3', SOW:'5.3',
  // 5.4 Security compliance
  GDPR:'5.4', 'PCI DSS':'5.4',
  // 3.3 Protect data
  PHI:'3.3', PII:'3.3', GPS:'3.3',
};
function classifyAcronym(acr, full){
  if(OVERRIDES_BY_FULL[full]) return OVERRIDES_BY_FULL[full];
  if(OVERRIDES_BY_ACR[acr]) return OVERRIDES_BY_ACR[acr];
  return null; // genuinely general IT/business terminology not tied to a specific SY0-701 objective
}

function genAcronymQuestions(){
  const qs = [];
  const freq = {};
  ACRONYMS.forEach(([a])=>{ freq[a]=(freq[a]||0)+1; });
  const fulls = ACRONYMS.map(e=>e[1]);
  const acrs = ACRONYMS.map(e=>e[0]);
  ACRONYMS.forEach(([acr, full])=>{
    const obj = classifyAcronym(acr, full);
    // Forward: acronym -> meaning. Only for acronyms unique in the list (avoid ambiguous correct answers).
    if(freq[acr]===1){
      const distractors = pickDistractors(full, fulls, 3);
      const choices = shuffle([full, ...distractors]);
      qs.push({obj, q:'What does the acronym "'+acr+'" stand for?', c:choices, a:choices.indexOf(full), e:'"'+acr+'" stands for '+full+'.', gen:true, src:'acronym'});
    }
    // Reverse: meaning -> acronym. Each "full" string is unique, so this is always unambiguous.
    const distractorsAcr = pickDistractors(acr, acrs, 3);
    const choices2 = shuffle([acr, ...distractorsAcr]);
    qs.push({obj, q:'Which acronym represents "'+full+'"?', c:choices2, a:choices2.indexOf(acr), e:'"'+full+'" is abbreviated as '+acr+'.', gen:true, src:'acronym'});
  });
  return qs;
}
function genFlashcardQuestions(){
  const qs = [];
  const defs = FLASHCARDS.map(f=>f.d);
  const terms = FLASHCARDS.map(f=>f.t);
  FLASHCARDS.forEach(f=>{
    const dDistractors = pickDistractors(f.d, defs, 3);
    const dChoices = shuffle([f.d, ...dDistractors]);
    qs.push({obj:f.obj, q:'Which of the following best describes "'+f.t+'"?', c:dChoices, a:dChoices.indexOf(f.d), e:f.t+': '+f.d, gen:true, src:'flashcard'});
    const tDistractors = pickDistractors(f.t, terms, 3);
    const tChoices = shuffle([f.t, ...tDistractors]);
    qs.push({obj:f.obj, q:'Which term is best described as: "'+f.d+'"?', c:tChoices, a:tChoices.indexOf(f.t), e:f.t+': '+f.d, gen:true, src:'flashcard'});
  });
  return qs;
}
/* ============ OBJECTIVE TAXONOMY (from the SY0-701 exam objectives' own sub-bullet lists) ============
   Each objective maps to its official sub-categories and the items listed under them.
   This lets us generate large volumes of accurate "which of these belongs to X" questions
   that are grounded directly in the source objectives, with distractors drawn from sibling
   categories in the same objective (and same domain) so wrong answers stay plausible. */
const TAXONOMY = {
'1.1':[
  {label:'security control category', items:['Technical','Managerial','Operational','Physical']},
  {label:'security control type', items:['Preventive','Deterrent','Detective','Corrective','Compensating','Directive']}
],
'1.2':[
  {label:'foundational security concept (CIA/non-repudiation)', items:['Confidentiality','Integrity','Availability','Non-repudiation']},
  {label:'AAA element', items:['Authentication','Authorization','Accounting']},
  {label:'Zero Trust plane', items:['Control Plane','Data Plane']},
  {label:'Zero Trust control plane component', items:['Adaptive identity','Threat scope reduction','Policy-driven access control','Policy Administrator','Policy Engine']},
  {label:'Zero Trust data plane component', items:['Implicit trust zones','Subject/System','Policy Enforcement Point']},
  {label:'physical security control', items:['Bollards','Access control vestibule','Fencing','Video surveillance','Security guard','Access badge','Lighting']},
  {label:'physical security sensor type', items:['Infrared','Pressure','Microwave','Ultrasonic']},
  {label:'deception and disruption technology', items:['Honeypot','Honeynet','Honeyfile','Honeytoken']}
],
'1.3':[
  {label:'business process impacting change security', items:['Approval process','Ownership','Stakeholders','Impact analysis','Test results','Backout plan','Maintenance window','Standard operating procedure']},
  {label:'technical implication of a change', items:['Allow lists/deny lists','Restricted activities','Downtime','Service restart','Application restart','Legacy applications','Dependencies']},
  {label:'change management documentation practice', items:['Updating diagrams','Updating policies/procedures','Version control']}
],
'1.4':[
  {label:'PKI element', items:['Public key','Private key','Key escrow']},
  {label:'encryption level', items:['Full-disk','Partition','File','Volume','Database','Record']},
  {label:'encryption category', items:['Transport/communication','Asymmetric','Symmetric']},
  {label:'cryptographic hardware/tool', items:['Trusted Platform Module (TPM)','Hardware security module (HSM)','Key management system','Secure enclave']},
  {label:'obfuscation method', items:['Steganography','Tokenization','Data masking']},
  {label:'certificate-related concept', items:['Certificate authorities','Certificate revocation lists (CRLs)','Online Certificate Status Protocol (OCSP)','Self-signed','Third-party','Root of trust','Certificate signing request (CSR) generation','Wildcard']},
  {label:'core cryptographic concept', items:['Hashing','Salting','Digital signatures','Key stretching','Blockchain','Open public ledger']}
],
'2.1':[
  {label:'threat actor type', items:['Nation-state','Unskilled attacker','Hacktivist','Insider threat','Organized crime','Shadow IT']},
  {label:'attribute of a threat actor', items:['Internal/external','Resources/funding','Level of sophistication/capability']},
  {label:'threat actor motivation', items:['Data exfiltration','Espionage','Service disruption','Blackmail','Financial gain','Philosophical/political beliefs','Ethical','Revenge','Disruption/chaos','War']}
],
'2.2':[
  {label:'message-based threat vector', items:['Email','Short Message Service (SMS)','Instant messaging (IM)']},
  {label:'threat vector/attack surface', items:['Image-based','File-based','Voice call','Removable device','Vulnerable software','Unsupported systems and applications','Default credentials','Open service ports']},
  {label:'unsecure network type', items:['Wireless','Wired','Bluetooth']},
  {label:'supply chain threat vector', items:['Managed service providers (MSPs)','Vendors','Suppliers']},
  {label:'human/social engineering vector', items:['Phishing','Vishing','Smishing','Misinformation/disinformation','Impersonation','Business email compromise','Pretexting','Watering hole','Brand impersonation','Typosquatting']}
],
'2.3':[
  {label:'application vulnerability', items:['Memory injection','Buffer overflow','Race conditions','Malicious update']},
  {label:'hardware vulnerability', items:['Firmware','End-of-life','Legacy']},
  {label:'virtualization vulnerability', items:['Virtual machine (VM) escape','Resource reuse']},
  {label:'vulnerability category', items:['Operating system (OS)-based','Web-based','Cloud-specific','Supply chain','Cryptographic','Misconfiguration','Zero-day']},
  {label:'mobile device vulnerability', items:['Side loading','Jailbreaking']},
  {label:'web-based vulnerability', items:['Structured Query Language injection (SQLi)','Cross-site scripting (XSS)']}
],
'2.4':[
  {label:'malware type', items:['Ransomware','Trojan','Worm','Spyware','Bloatware','Virus','Keylogger','Logic bomb','Rootkit']},
  {label:'physical attack', items:['Brute force','Radio frequency identification (RFID) cloning','Environmental']},
  {label:'network attack', items:['Distributed denial-of-service (DDoS)','Domain Name System (DNS) attacks','Wireless','On-path','Credential replay','Malicious code']},
  {label:'application attack', items:['Injection','Buffer overflow','Replay','Privilege escalation','Forgery','Directory traversal']},
  {label:'cryptographic attack', items:['Downgrade','Collision','Birthday']},
  {label:'password attack', items:['Spraying','Brute force']},
  {label:'indicator of malicious activity', items:['Account lockout','Concurrent session usage','Blocked content','Impossible travel','Resource consumption','Resource inaccessibility','Out-of-cycle logging','Missing logs']}
],
'2.5':[
  {label:'mitigation technique', items:['Segmentation','Access control','Application allow list','Isolation','Patching','Monitoring','Least privilege','Configuration enforcement','Decommissioning']},
  {label:'hardening technique', items:['Installation of endpoint protection','Host-based firewall','Host-based intrusion prevention system (HIPS)','Disabling ports/protocols','Default password changes','Removal of unnecessary software']}
],
'3.1':[
  {label:'architecture/infrastructure concept', items:['Cloud','Infrastructure as code (IaC)','Serverless','Microservices','On-premises','Centralized vs. decentralized','Containerization','Virtualization','IoT','Industrial control systems (ICS)/SCADA','Real-time operating system (RTOS)','Embedded systems','High availability']},
  {label:'architecture design consideration', items:['Availability','Resilience','Cost','Responsiveness','Scalability','Ease of deployment','Risk transference','Ease of recovery','Patch availability','Inability to patch','Power','Compute']}
],
'3.2':[
  {label:'infrastructure consideration', items:['Device placement','Security zones','Attack surface','Connectivity','Fail-open','Fail-closed','Active vs. passive device','Inline vs. tap/monitor']},
  {label:'network appliance', items:['Jump server','Proxy server','Intrusion prevention system (IPS)','Intrusion detection system (IDS)','Load balancer','Sensors']},
  {label:'firewall type', items:['Web application firewall (WAF)','Unified threat management (UTM)','Next-generation firewall (NGFW)']},
  {label:'secure communication/access method', items:['Virtual private network (VPN)','Remote access','Tunneling','Software-defined wide area network (SD-WAN)','Secure access service edge (SASE)']}
],
'3.3':[
  {label:'data type', items:['Regulated','Trade secret','Intellectual property','Legal information','Financial information','Human- and non-human-readable']},
  {label:'data classification', items:['Sensitive','Confidential','Public','Restricted','Private','Critical']},
  {label:'data state', items:['Data at rest','Data in transit','Data in use']},
  {label:'method to secure data', items:['Geographic restrictions','Masking','Tokenization','Obfuscation','Permission restrictions']}
],
'3.4':[
  {label:'alternate site type', items:['Hot site','Cold site','Warm site','Geographic dispersion']},
  {label:'resilience testing type', items:['Tabletop exercises','Fail over','Simulation','Parallel processing']},
  {label:'backup concept', items:['Onsite/offsite','Frequency','Snapshots','Recovery','Replication','Journaling']},
  {label:'power resilience concept', items:['Generators','Uninterruptible power supply (UPS)']}
],
'4.1':[
  {label:'hardening target', items:['Mobile devices','Workstations','Switches','Routers','Cloud infrastructure','Servers','ICS/SCADA','Embedded systems','RTOS','IoT devices']},
  {label:'mobile deployment model', items:['Bring your own device (BYOD)','Corporate-owned, personally enabled (COPE)','Choose your own device (CYOD)']},
  {label:'mobile connection method', items:['Cellular','Wi-Fi','Bluetooth']},
  {label:'wireless security setting', items:['Wi-Fi Protected Access 3 (WPA3)','AAA/RADIUS','Cryptographic protocols','Authentication protocols']},
  {label:'application security practice', items:['Input validation','Secure cookies','Static code analysis','Code signing','Sandboxing']}
],
'4.2':[
  {label:'asset management lifecycle stage', items:['Acquisition/procurement process','Assignment/accounting','Monitoring/asset tracking']},
  {label:'asset disposal/decommissioning method', items:['Sanitization','Destruction','Certification','Data retention']}
],
'4.3':[
  {label:'vulnerability identification method', items:['Vulnerability scan','Static analysis','Dynamic analysis','Package monitoring','Threat feed','Penetration testing','Responsible disclosure program','System/process audit']},
  {label:'vulnerability analysis concept', items:['False positive','False negative','Prioritize','Common Vulnerability Scoring System (CVSS)','Common Vulnerability Enumeration (CVE)','Exposure factor']},
  {label:'vulnerability response/remediation action', items:['Patching','Insurance','Segmentation','Compensating controls','Exceptions and exemptions']},
  {label:'remediation validation step', items:['Rescanning','Audit','Verification']}
],
'4.4':[
  {label:'monitored computing resource', items:['Systems','Applications','Infrastructure']},
  {label:'monitoring activity', items:['Log aggregation','Alerting','Scanning','Reporting','Archiving']},
  {label:'monitoring/alerting tool', items:['Security Content Automation Protocol (SCAP)','Benchmarks','Antivirus','Data loss prevention (DLP)','Simple Network Management Protocol (SNMP) traps','NetFlow','Vulnerability scanners']}
],
'4.5':[
  {label:'firewall component', items:['Rules','Access lists','Ports/protocols','Screened subnets']},
  {label:'web filtering technique', items:['Agent-based','Centralized proxy','URL scanning','Content categorization','Block rules','Reputation']},
  {label:'email security control', items:['Domain-based Message Authentication Reporting and Conformance (DMARC)','DomainKeys Identified Mail (DKIM)','Sender Policy Framework (SPF)','Gateway']},
  {label:'enterprise security capability', items:['File integrity monitoring','Network access control (NAC)','Endpoint detection and response (EDR)','Extended detection and response (XDR)','User behavior analytics']}
],
'4.6':[
  {label:'access control model', items:['Mandatory (MAC)','Discretionary (DAC)','Role-based (RBAC)','Rule-based','Attribute-based (ABAC)','Time-of-day restrictions']},
  {label:'multifactor authentication factor', items:['Something you know','Something you have','Something you are','Somewhere you are']},
  {label:'MFA implementation', items:['Biometrics','Hard/soft authentication tokens','Security keys']},
  {label:'SSO-related protocol/concept', items:['Lightweight Directory Access Protocol (LDAP)','Open authorization (OAuth)','Security Assertions Markup Language (SAML)','Federation']},
  {label:'password best practice concept', items:['Length','Complexity','Reuse','Expiration','Age']},
  {label:'privileged access management tool', items:['Just-in-time permissions','Password vaulting','Ephemeral credentials']}
],
'4.7':[
  {label:'automation/scripting use case', items:['User provisioning','Resource provisioning','Guard rails','Security groups','Ticket creation','Escalation','Enabling/disabling services and access','Continuous integration and testing']},
  {label:'benefit of automation', items:['Efficiency/time saving','Enforcing baselines','Standard infrastructure configurations','Scaling in a secure manner','Reaction time','Workforce multiplier']},
  {label:'automation consideration/risk', items:['Complexity','Cost','Single point of failure','Technical debt','Ongoing supportability']}
],
'4.8':[
  {label:'incident response process step', items:['Preparation','Detection','Analysis','Containment','Eradication','Recovery','Lessons learned']},
  {label:'incident response testing method', items:['Tabletop exercise','Simulation']},
  {label:'incident response supporting activity', items:['Root cause analysis','Threat hunting','Digital forensics']},
  {label:'digital forensics concept', items:['Legal hold','Chain of custody','Acquisition','Preservation','E-discovery']}
],
'4.9':[
  {label:'log data source', items:['Firewall logs','Application logs','Endpoint logs','OS-specific security logs','IPS/IDS logs','Network logs','Metadata']},
  {label:'investigation data source', items:['Vulnerability scans','Automated reports','Dashboards','Packet captures']}
],
'5.1':[
  {label:'governance policy type', items:['Acceptable use policy (AUP)','Information security policies','Business continuity','Disaster recovery','Incident response','Software development lifecycle (SDLC)','Change management']},
  {label:'governance standard', items:['Password','Access control','Physical security','Encryption']},
  {label:'governance procedure', items:['Change management','Onboarding/offboarding','Playbooks']},
  {label:'external governance consideration', items:['Regulatory','Legal','Industry','Local/regional','National','Global']},
  {label:'governance structure', items:['Boards','Committees','Government entities','Centralized/decentralized']},
  {label:'data/system role', items:['Owners','Controllers','Processors','Custodians/stewards']}
],
'5.2':[
  {label:'risk assessment type', items:['Ad hoc','Recurring','One-time','Continuous']},
  {label:'risk analysis concept', items:['Qualitative','Quantitative','Single loss expectancy (SLE)','Annualized loss expectancy (ALE)','Annualized rate of occurrence (ARO)','Probability','Likelihood','Exposure factor']},
  {label:'risk register element', items:['Key risk indicators','Risk owners','Risk threshold']},
  {label:'risk appetite type', items:['Expansionary','Conservative','Neutral']},
  {label:'risk management strategy', items:['Transfer','Accept','Avoid','Mitigate']},
  {label:'business impact analysis metric', items:['Recovery time objective (RTO)','Recovery point objective (RPO)','Mean time to repair (MTTR)','Mean time between failures (MTBF)']}
],
'5.3':[
  {label:'vendor assessment method', items:['Penetration testing','Right-to-audit clause','Evidence of internal audits','Independent assessments','Supply chain analysis']},
  {label:'vendor selection consideration', items:['Due diligence','Conflict of interest']},
  {label:'third-party agreement type', items:['Service-level agreement (SLA)','Memorandum of agreement (MOA)','Memorandum of understanding (MOU)','Master service agreement (MSA)','Statement of work (SOW)','Non-disclosure agreement (NDA)','Business partners agreement (BPA)']}
],
'5.4':[
  {label:'compliance reporting type', items:['Internal','External']},
  {label:'consequence of non-compliance', items:['Fines','Sanctions','Reputational damage','Loss of license','Contractual impacts']},
  {label:'compliance monitoring activity', items:['Due diligence/care','Attestation and acknowledgement','Internal and external review','Automation']},
  {label:'privacy-related concept', items:['Data subject','Controller vs. processor','Data inventory and retention','Right to be forgotten']}
],
'5.5':[
  {label:'internal audit type', items:['Compliance','Audit committee','Self-assessments']},
  {label:'external audit type', items:['Regulatory','Examinations','Assessment','Independent third-party audit']},
  {label:'penetration testing type', items:['Physical','Offensive','Defensive','Integrated']},
  {label:'environment knowledge level', items:['Known environment','Partially known environment','Unknown environment']},
  {label:'reconnaissance type', items:['Passive','Active']}
],
'5.6':[
  {label:'phishing-related awareness activity', items:['Campaigns','Recognizing a phishing attempt','Responding to reported suspicious messages']},
  {label:'anomalous behavior category', items:['Risky','Unexpected','Unintentional']},
  {label:'user awareness training topic', items:['Policy/handbooks','Situational awareness','Insider threat','Password management','Removable media and cables','Social engineering','Operational security','Hybrid/remote work environments']},
  {label:'awareness reporting cadence', items:['Initial','Recurring']},
  {label:'awareness program lifecycle stage', items:['Development','Execution']}
]
};
function genTaxonomyQuestions(){
  const qs = [];
  const globalPool = [...new Set(Object.values(TAXONOMY).flatMap(cats=>cats.flatMap(c=>c.items)))];
  Object.entries(TAXONOMY).forEach(([objId, cats])=>{
    const allItemsInObj = [...new Set(cats.flatMap(c=>c.items))];
    const domainId = objId.split('.')[0]+'.0';
    const domain = DOMAINS.find(d=>d.id===domainId);
    const domainPool = domain ? [...new Set(domain.objectives.filter(o=>o.id!==objId).flatMap(o=>(TAXONOMY[o.id]||[]).flatMap(c=>c.items)))] : [];
    cats.forEach(cat=>{
      const siblingPool = allItemsInObj.filter(it=>!cat.items.includes(it));
      cat.items.forEach(item=>{
        let distractors = pickDistractors(item, siblingPool, 3);
        if(distractors.length<3) distractors = pickDistractors(item, [...siblingPool, ...domainPool], 3);
        if(distractors.length<3) distractors = pickDistractors(item, globalPool, 3);
        distractors = distractors.slice(0,3);
        if(distractors.length<3) return; // not enough safe distractors, skip rather than risk a malformed question
        const choices = shuffle([item, ...distractors]);
        qs.push({
          obj: objId,
          q: 'Which of the following is best classified as a "'+cat.label+'" under Security+ objective '+objId+'?',
          c: choices,
          a: choices.indexOf(item),
          e: '"'+item+'" is listed under '+cat.label+' in objective '+objId+' of the SY0-701 exam objectives.',
          gen:true,
          src:'taxonomy'
        });
      });
    });
  });
  return qs;
}
const QBANK = QBANK_CORE.concat(genAcronymQuestions(), genFlashcardQuestions(), genTaxonomyQuestions());
QBANK.forEach((q,i)=>q.id='q'+i);

/* ============ PBQ (drag/match) ITEMS ============ */
const PBQS = [
  {obj:'1.1', title:'Match the control to its category', type:'match',
    pairs:[['Security awareness training','Managerial'],['Fenced perimeter','Physical'],['Firewall ACL','Technical'],['Mandatory vacation policy','Operational']],
    options:['Managerial','Physical','Technical','Operational']},
  {obj:'5.2', title:'Match the term to its definition', type:'match',
    pairs:[['RPO','Maximum acceptable data loss, in time'],['RTO','Maximum acceptable downtime'],['MTBF','Average time between failures'],['MTTR','Average time to repair/restore']],
    options:['Maximum acceptable data loss, in time','Maximum acceptable downtime','Average time between failures','Average time to repair/restore']},
  {obj:'4.8', title:'Order the incident response process', type:'order',
    items:['Preparation','Detection','Analysis','Containment','Eradication','Recovery','Lessons learned']},
  {obj:'5.2', title:'Order the general steps of the risk management process', type:'order',
    items:['Risk identification','Risk assessment','Risk analysis','Risk response (mitigate/transfer/avoid/accept)','Risk monitoring and reporting']},
  {obj:'4.6', title:'Match the authentication factor to its example', type:'match',
    pairs:[['Password','Something you know'],['Hardware token','Something you have'],['Fingerprint','Something you are'],['Geofencing check','Somewhere you are']],
    options:['Something you know','Something you have','Something you are','Somewhere you are']},
  {obj:'3.4', title:'Match the site type to its recovery characteristic', type:'match',
    pairs:[['Hot site','Fully operational, near-instant failover'],['Warm site','Partially configured, some setup required'],['Cold site','Basic facility only, longest recovery time']],
    options:['Fully operational, near-instant failover','Partially configured, some setup required','Basic facility only, longest recovery time']},
  {obj:'3.3', title:'Match the data state to its example', type:'match',
    pairs:[['Data at rest','A database file stored on a server\'s disk'],['Data in transit','An API request traveling over HTTPS'],['Data in use','A spreadsheet actively open and being edited in RAM']],
    options:['A database file stored on a server\'s disk','An API request traveling over HTTPS','A spreadsheet actively open and being edited in RAM']},
  {obj:'5.2', title:'Match the risk strategy to its example', type:'match',
    pairs:[['Purchasing cyber insurance','Transfer'],['Discontinuing a risky product line','Avoid'],['Deploying additional firewall rules','Mitigate'],['Formally signing off on a low residual risk','Accept']],
    options:['Transfer','Avoid','Mitigate','Accept']},
  {obj:'1.4', title:'Match the encryption level to its scope', type:'match',
    pairs:[['Full-disk encryption','Encrypts an entire storage volume'],['File encryption','Encrypts a single file'],['Database encryption','Encrypts specific database fields or tables']],
    options:['Encrypts an entire storage volume','Encrypts a single file','Encrypts specific database fields or tables']},
  {obj:'1.3', title:'Order the change management approval workflow', type:'order',
    items:['Submit change request','Impact analysis','Stakeholder approval','Schedule maintenance window','Implement change','Document results']},
  {obj:'4.3', title:'Order the vulnerability management lifecycle', type:'order',
    items:['Identify (scan)','Analyze and prioritize (CVSS)','Remediate (patch/mitigate)','Validate (rescan)','Report']},
  {obj:'4.6', title:'Match the access control model to its defining trait', type:'match',
    pairs:[['MAC','Access decided by a central authority using data labels'],['DAC','Resource owner decides who gets access'],['RBAC','Access tied to a defined job role'],['ABAC','Access decided using a combination of attributes']],
    options:['Access decided by a central authority using data labels','Resource owner decides who gets access','Access tied to a defined job role','Access decided using a combination of attributes']},
  {obj:'5.3', title:'Match the vendor agreement to its purpose', type:'match',
    pairs:[['SLA','Defines measurable performance targets'],['NDA','Protects shared confidential information'],['MOU','Documents a general, non-binding understanding between parties'],['SOW','Defines specific deliverables and work to be performed']],
    options:['Defines measurable performance targets','Protects shared confidential information','Documents a general, non-binding understanding between parties','Defines specific deliverables and work to be performed']},
  {obj:'4.8', title:'Order the digital forensics evidence process', type:'order',
    items:['Identification','Legal hold','Acquisition','Preservation (chain of custody)','Analysis','Reporting']},
  {obj:'3.2', title:'Match the firewall failure mode to its behavior', type:'match',
    pairs:[['Fail-open','Traffic continues flowing if the device fails'],['Fail-closed','All traffic is blocked if the device fails']],
    options:['Traffic continues flowing if the device fails','All traffic is blocked if the device fails']},
  {obj:'1.2', title:'Match the Zero Trust component to its plane', type:'match',
    pairs:[['Policy Engine','Control Plane'],['Policy Administrator','Control Plane'],['Policy Enforcement Point','Data Plane'],['Subject/System','Data Plane']],
    options:['Control Plane','Data Plane']},
  {obj:'2.1', title:'Match the threat actor motivation to its example', type:'match',
    pairs:[['A group demands payment to prevent leaking stolen data','Blackmail'],['An activist defaces a website over a political issue','Philosophical/political beliefs'],['A former employee sabotages systems after termination','Revenge'],['A competitor pays for stolen trade secrets','Financial gain']],
    options:['Blackmail','Philosophical/political beliefs','Revenge','Financial gain']},
  {obj:'4.2', title:'Order the hardware asset management lifecycle', type:'order',
    items:['Acquisition/procurement','Assignment and accounting','Monitoring and asset tracking','Disposal/decommissioning (sanitization and destruction)']},
  {obj:'4.7', title:'Match the automation benefit to its description', type:'match',
    pairs:[['Workforce multiplier','Extends what a limited security team can accomplish'],['Enforcing baselines','Ensures systems are consistently configured to a secure standard'],['Reaction time','Reduces the delay between detecting and responding to an event']],
    options:['Extends what a limited security team can accomplish','Ensures systems are consistently configured to a secure standard','Reduces the delay between detecting and responding to an event']},
  {obj:'4.9', title:'Match the log/data source to its best use case', type:'match',
    pairs:[['Firewall logs','Confirming whether a connection attempt was allowed or blocked'],['Packet captures','Reconstructing the exact contents of network communications'],['Endpoint logs','Identifying process execution and file activity on a host'],['Metadata','Determining when and by whom a file was created or modified']],
    options:['Confirming whether a connection attempt was allowed or blocked','Reconstructing the exact contents of network communications','Identifying process execution and file activity on a host','Determining when and by whom a file was created or modified']},
  {obj:'5.4', title:'Match the privacy concept to its definition', type:'match',
    pairs:[['Data controller','Determines the purposes and means of processing personal data'],['Data processor','Processes personal data on the controller\'s behalf and instructions'],['Data subject','The individual whose personal data is being collected or processed'],['Right to be forgotten','The ability to request erasure of one\'s personal data']],
    options:['Determines the purposes and means of processing personal data','Processes personal data on the controller\'s behalf and instructions','The individual whose personal data is being collected or processed','The ability to request erasure of one\'s personal data']},
  {obj:'5.5', title:'Match the reconnaissance type to its description', type:'match',
    pairs:[['Passive reconnaissance','Gathering information without directly interacting with the target'],['Active reconnaissance','Directly probing or scanning the target system']],
    options:['Gathering information without directly interacting with the target','Directly probing or scanning the target system']},
  {obj:'5.6', title:'Match the anomalous behavior to its category', type:'match',
    pairs:[['An employee accesses far more files than their role requires','Risky'],['A user logs in at an unusual hour from an unfamiliar location','Unexpected'],['A misconfigured script accidentally emails a report to the wrong group','Unintentional']],
    options:['Risky','Unexpected','Unintentional']},
];

/* Programmatically generate additional matching PBQs from the authoritative acronym list,
   grouped BY OBJECTIVE using the same audited classifyAcronym() mapping used for questions
   (not arbitrary slices), so every generated PBQ is genuinely tied to one exam objective. */
function genAcronymPBQs(groupSize){
  const buckets = {};
  ACRONYMS.forEach(([acr, full])=>{
    const obj = classifyAcronym(acr, full);
    if(!obj) return; // skip general-reference acronyms with no confident objective match
    (buckets[obj] = buckets[obj] || []).push([acr, full]);
  });
  const out = [];
  Object.entries(buckets).forEach(([objId, entries])=>{
    const shuffled = shuffle(entries);
    for(let i=0; i<shuffled.length; i+=groupSize){
      const group = shuffled.slice(i, i+groupSize);
      if(group.length < 3) continue; // too small to be a meaningful matching exercise
      out.push({
        obj: objId,
        title:'Match the acronym to its meaning — '+objId+' '+OBJ_INDEX[objId].title,
        type:'match',
        pairs: group.map(([a,f])=>[a,f]),
        options: group.map(([,f])=>f)
      });
    }
  });
  return out;
}
PBQS.push(...genAcronymPBQs(5));

/* ============ STUDY TIPS ============ */
const TIPS = [
  {icon:'book', title:'Study by domain weight', body:'Security Operations (28%) and Threats/Vulnerabilities/Mitigations (22%) make up half the exam. Spend proportionally more review time there, but don\'t neglect governance (5.0) — it\'s a distinct 20%.', list:['Build a study schedule allocating time roughly proportional to domain weight.','Revisit General Security Concepts (1.0) early — it underpins every other domain.']},
  {icon:'quiz', title:'Use active recall, not re-reading', body:'Passive re-reading of notes creates a false sense of mastery. Testing yourself with practice questions and flashcards strengthens retrieval far more effectively.', list:['Run a short practice quiz daily instead of one long cram session weekly.','When you miss a question, write the explanation in your own words before moving on.']},
  {icon:'cards', title:'Master the acronyms early', body:'SY0-701 leans heavily on acronym recognition (SASE, SAML, RADIUS, DKIM, etc.). Confusing similar-looking acronyms is a common source of missed points.', list:['Group similar acronyms (e.g., authentication protocols vs. encryption protocols) and quiz yourself on each cluster.','Say the full expansion out loud, not just the letters.']},
  {icon:'pbq', title:'Don\'t skip performance-based questions', body:'PBQs (drag-and-drop, matching, ordering) are scenario-based and often intimidating, but they follow recognizable patterns once practiced.', list:['Practice sequencing processes: incident response, risk management, change management.','If a PBQ stumps you on exam day, flag it and return after finishing multiple-choice questions.']},
  {icon:'shield', title:'Think like a security professional, not a memorizer', body:'Many questions are scenario-based and reward applying a concept to a new situation rather than recalling a definition verbatim.', list:['For every concept, ask: "In what real situation would I actually use this control?"','Eliminate obviously wrong answers first, then compare the remaining two carefully for scope and specificity.']},
  {icon:'settings', title:'Simulate exam conditions', body:'The real exam allows a maximum of 90 questions in 90 minutes — a brisk pace. Build speed and stamina before test day.', list:['Take timed practice sets, not just untimed review.','Practice explaining your reasoning briefly for each answer; if you can\'t justify it in a sentence, review that objective again.']},
];

/* Detailed study methods: what the method is, why it works (the research/mechanism), and
   exactly how to execute it using this app's specific features (not generic advice). */
const STUDY_METHODS = [
  {
    icon:'quiz', name:'Retrieval Practice (Active Recall)',
    summary:'Forcing your brain to produce an answer from memory — rather than recognizing it in your notes — builds far stronger, more durable retrieval pathways.',
    breakdown:[
      'Re-reading creates familiarity, which feels like knowledge but doesn\'t predict recall under exam pressure.',
      'Each successful retrieval attempt strengthens the memory trace more than passive review does ("testing effect").',
      'Struggling to recall — even failing — improves later retention more than an easy re-read, as long as you check the answer.',
      'Works best in short, frequent bursts rather than one long session.'
    ],
    application:[
      'Run a Practice Quiz of 10-25 questions daily rather than one 200-question cram session weekly.',
      'On the Flashcards page, always try to say the answer out loud before flipping the card — don\'t flip immediately.',
      'After every quiz, reread the explanation for anything you missed and try to restate it in your own words before moving on.',
      'Use the objective-filtered quiz (click any objective in the sidebar) to force recall on one narrow topic at a time.'
    ]
  },
  {
    icon:'refresh', name:'Spaced Repetition',
    summary:'Reviewing material at increasing intervals — instead of massing it into one session — fights the natural forgetting curve far more efficiently than cramming.',
    breakdown:[
      'Memory decays predictably over time; revisiting information right as you\'re about to forget it resets and extends the decay curve.',
      'Spacing out review sessions produces better long-term retention than the same amount of time spent all at once ("spacing effect").',
      'Interrupting and resuming study (with a gap) is more effortful — and that extra effort is what strengthens the memory.',
      'Weak items need shorter intervals between reviews; strong items can wait longer.'
    ],
    application:[
      'Set a realistic Daily goal in Settings (Study tools) and check the Dashboard\'s goal bar daily — consistency beats duration.',
      'Revisit the Dashboard\'s per-domain accuracy chart weekly and re-quiz any objective under ~70% before moving to new material.',
      'For flashcards, use Shuffle regularly so cards resurface in a different order instead of always in the same sequence.',
      'Study general reference acronyms early, then let 2-3 days pass before re-testing them with a fresh Acronyms-deck flashcard session.'
    ]
  },
  {
    icon:'ops', name:'Interleaving (Mixed Practice)',
    summary:'Mixing questions from different domains in one session — instead of drilling one topic exhaustively — trains you to first identify *which* concept applies, which is exactly what the real exam demands.',
    breakdown:[
      'Blocked practice (all Domain 1 questions, then all Domain 2) inflates your sense of mastery because you always know what\'s being tested.',
      'Interleaving forces you to discriminate between similar-looking concepts (e.g., IDS vs. IPS, MOU vs. MOA), which is a skill the exam directly tests.',
      'It feels harder and slower in the moment, but produces better transfer to novel/scenario questions.',
      'It mirrors real exam conditions, where domain order is randomized and unannounced.'
    ],
    application:[
      'Use the general "Practice Quiz" (not an objective-filtered one) for most of your sessions — it draws from all five domains at once.',
      'On the Flashcards page, study the "All" deck rather than filtering to just Concepts or just Acronyms once you\'re past initial learning.',
      'When reviewing PBQs, don\'t do all of one objective back-to-back — use the domain filter to jump between different objectives each round.',
      'Once each domain is individually above ~75% accuracy on the Dashboard, switch entirely to mixed/interleaved practice.'
    ]
  },
  {
    icon:'check', name:'Practice Testing Under Real Conditions',
    summary:'Simulating the actual exam format — timed, mixed-domain, no notes — is one of the single most effective study techniques, and it also builds pacing and stamina.',
    breakdown:[
      'The real exam allows a maximum of 90 questions in 90 minutes, mixing multiple-choice and performance-based items.',
      'Practice testing surfaces gaps that review alone won\'t reveal, and reduces exam-day anxiety through familiarity.',
      'Timed practice trains pacing — you must learn when to move on from a question you\'re stuck on.',
      'Full-length tests are most valuable in the final 1-2 weeks before the exam, after foundational review is done.'
    ],
    application:[
      'Start a Practice Quiz and choose the 100-question option to approximate a full-length run.',
      'Time yourself with an external timer at roughly 1 minute per question and don\'t pause the session.',
      'Mix in 2-3 PBQs partway through your timed run, the way they\'d actually be interspersed on exam day.',
      'Afterward, use the Dashboard\'s accuracy donut and domain bar chart to see exactly where the timed run broke down.'
    ]
  },
  {
    icon:'book', name:'Elaboration & the Feynman Technique',
    summary:'Explaining a concept in plain language, as if teaching someone else, exposes shallow understanding that multiple-choice recognition can hide.',
    breakdown:[
      'If you can\'t explain *why* an answer is correct — not just that it is — you likely don\'t understand it deeply enough for scenario questions.',
      'Elaboration (connecting new facts to what you already know) improves retention more than isolated memorization.',
      'Teaching forces you to organize knowledge into a coherent structure, revealing gaps you didn\'t know you had.',
      'Simplifying jargon-heavy security concepts into plain language is itself a real-world security communication skill.'
    ],
    application:[
      'After each quiz question, read the explanation, then close your eyes and explain the concept out loud in your own words before continuing.',
      'Use the Acronym glossary\'s explanation column as a jargon-to-plain-English reference, and try covering it up to self-test first.',
      'For any objective under 70% on the Dashboard, pick its weakest sub-topic and write a 2-3 sentence explanation from memory, then check it against the taxonomy-derived questions for that objective.',
      'Pair up with a study partner (or an AI assistant) and literally teach them one objective per week.'
    ]
  },
  {
    icon:'settings', name:'Time-boxing (Pomodoro-style Sessions)',
    summary:'Studying in focused, timed intervals with short breaks sustains concentration far longer than open-ended "study for a while" sessions.',
    breakdown:[
      'Attention naturally degrades over long unbroken sessions; scheduled breaks prevent diminishing returns.',
      'A defined end point (e.g., 25 minutes) lowers the activation energy to start studying — "just one Pomodoro" feels achievable.',
      'Short breaks between sessions also create natural spacing, which reinforces the spaced-repetition effect above.',
      'Tracking how many sessions you complete builds momentum and makes progress visible.'
    ],
    application:[
      'Run one focused Practice Quiz batch (10-25 questions) as a single timed block, then take a 5-minute break before the next.',
      'Use the Settings font-size and theme controls to make long sessions physically comfortable — eye strain is a real reason people quit early.',
      'Log a session against your Daily goal on the Dashboard after each block so progress is visible immediately, not just at the end of the day.',
      'Alternate block types each session: one quiz block, one flashcard block, one PBQ block — instead of always defaulting to the same activity.'
    ]
  },
  {
    icon:'flag', name:'Mnemonics & Memory Anchors',
    summary:'Compressing lists and sequences into a memorable phrase, acronym, or story dramatically reduces the working-memory load of recalling ordered or grouped facts.',
    breakdown:[
      'Human memory handles vivid, structured, or story-like information far better than arbitrary lists.',
      'Mnemonics are especially effective for ordered processes (like the 7-step incident response lifecycle) where sequence itself is tested.',
      'Grouping related items (e.g., the four MFA factor types) into a single memorable chunk reduces cognitive load during the exam.',
      'Self-generated mnemonics are stickier than ones you\'re handed — the act of creating one is itself a form of elaboration.'
    ],
    application:[
      'Use the "Order the incident response process" and other ordering PBQs to drill sequences, then invent your own short phrase for each step\'s first letter.',
      'For grouped concepts (control categories, MFA factors, risk strategies), use the taxonomy-derived quiz questions — tagged "best classified as" — to test the grouping itself, not just individual facts.',
      'Build your own mnemonic for the 5 domain weights (12/22/18/28/20) since that distribution itself is useful exam intuition.',
      'Revisit your mnemonics via Flashcards by writing the phrase into your own study notes alongside the matching term.'
    ]
  },
  {
    icon:'warn', name:'Error Analysis & Weak-Spot Targeting',
    summary:'Systematically reviewing *why* you got a question wrong — not just that you did — turns every mistake into a targeted, efficient study action.',
    breakdown:[
      'Not all errors are equal: a careless misread is different from a genuine knowledge gap, and they need different fixes.',
      'Without deliberate review, the same misconceptions tend to resurface repeatedly across practice sessions.',
      'Focusing revision time on your specific weak points is more efficient than broad, undifferentiated review.',
      'Tracking error patterns over time (not just single-session scores) reveals which objectives need structural, not just incremental, review.'
    ],
    application:[
      'After each quiz, reread every red "Incorrect" explanation before leaving the results screen — don\'t just check the score and move on.',
      'Use the Dashboard\'s domain accuracy bar chart to identify your lowest-performing domains at a glance, then jump straight into that objective\'s filtered quiz from the sidebar.',
      'For any objective consistently below ~60%, switch study method — try the Feynman technique or mnemonics on that objective specifically, rather than just re-quizzing it the same way.',
      'Revisit the PBQ list\'s domain filter to specifically re-attempt scenario exercises tied to your weakest domain.'
    ]
  },
];

/* ============ APP STATE / HELPERS ============ */
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

const STORE_KEY = 'secplus_progress_v1';
function loadProgress(){ try{ const p = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; return {seen:p.seen||{}, correct:p.correct||{}, flashSeen:p.flashSeen||{}, pbq:p.pbq||{}, dailyLog:p.dailyLog||{}}; }catch(e){ return {seen:{}, correct:{}, flashSeen:{}, pbq:{}, dailyLog:{}}; } }
function saveProgress(p){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(p)); }catch(e){} }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function logDailyActivity(){ const k = todayKey(); progress.dailyLog[k] = (progress.dailyLog[k]||0) + 1; }
let progress = loadProgress();

const SETTINGS_KEY = 'secplus_settings_v1';
const DEFAULT_FONT_SIZE = 15;
const RADIUS_PRESETS = {theme:null, sharp:'0px', soft:'8px', rounded:'14px', pill:'22px'};
function loadSettings(){
  try{
    const s = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    return {
      theme: s.theme || 'light',
      layout: s.layout || 'default',
      fontSize: s.fontSize || DEFAULT_FONT_SIZE,
      density: s.density || 'comfortable',   // compact | comfortable | spacious
      motion: s.motion || 'normal',           // normal | reduced
      radius: s.radius || 'theme',            // theme | sharp | soft | rounded | pill
      accent: s.accent || '',                 // '' = use theme's own accent color
      quizDefaultSize: s.quizDefaultSize || 10,
      dailyGoal: s.dailyGoal || 20,
      sidebarExpanded: !!s.sidebarExpanded,
    };
  }catch(e){
    return {theme:'light', layout:'default', fontSize:DEFAULT_FONT_SIZE, density:'comfortable', motion:'normal', radius:'theme', accent:'', quizDefaultSize:10, dailyGoal:20, sidebarExpanded:false};
  }
}
function saveSettings(s){ try{ localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }catch(e){} }
let settings = loadSettings();
function applySettings(){
  document.documentElement.setAttribute('data-theme', settings.theme);
  if(settings.layout && settings.layout!=='default') document.documentElement.setAttribute('data-layout', settings.layout);
  else document.documentElement.removeAttribute('data-layout');
  // The whole stylesheet is authored in rem units, so setting the ROOT element's
  // font-size (not the body's) rescales every piece of text on the site uniformly.
  const fs = Math.max(8, Math.min(24, settings.fontSize || DEFAULT_FONT_SIZE));
  document.documentElement.style.fontSize = fs + 'px';
  document.documentElement.setAttribute('data-density', settings.density || 'comfortable');
  document.documentElement.setAttribute('data-motion', settings.motion === 'reduced' ? 'reduced' : 'normal');
  const radiusVal = RADIUS_PRESETS[settings.radius];
  if(radiusVal) document.documentElement.style.setProperty('--radius', radiusVal);
  else document.documentElement.style.removeProperty('--radius');
  if(settings.accent){
    document.documentElement.style.setProperty('--accent', settings.accent);
    document.documentElement.style.setProperty('--accent-text', pickContrastText(settings.accent));
  } else {
    document.documentElement.style.removeProperty('--accent');
    document.documentElement.style.removeProperty('--accent-text');
  }
}
function pickContrastText(hex){
  const h = hex.replace('#','');
  if(h.length!==6) return '#ffffff';
  const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
  const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
  return luminance > 0.6 ? '#1c1c1c' : '#ffffff';
}
applySettings();

/* ============ THEME COLOR PREVIEW (read live from the stylesheet, single source of truth) ============ */
function getThemeColorMap(){
  const root = {bg:'#f7f6f3', bgElev:'#ffffff', text:'#1c1c1c', accent:'#2f5d50', border:'#dedbd3'};
  const map = {};
  for(const sheet of document.styleSheets){
    let rules;
    try{ rules = sheet.cssRules || sheet.rules; }catch(e){ continue; }
    if(!rules) continue;
    for(const rule of rules){
      if(!rule.selectorText) continue;
      const m = rule.selectorText.match(/data-theme="([a-zA-Z0-9-]+)"/);
      if(!m) continue;
      const name = m[1];
      const st = rule.style;
      const get = (prop, fallback)=>{ const v = st.getPropertyValue(prop); return v && v.trim() ? v.trim() : fallback; };
      map[name] = {
        bg: get('--bg', root.bg),
        bgElev: get('--bg-elev', root.bgElev),
        text: get('--text', root.text),
        accent: get('--accent', root.accent),
        border: get('--border', root.border)
      };
    }
  }
  if(!map.light) map.light = root;
  return map;
}
const THEME_COLOR_MAP = getThemeColorMap();

/* ============ NAV DOMAIN SIDEBAR ============ */
function renderNavDomains(){
  const wrap = document.getElementById('navDomains');
  wrap.innerHTML = DOMAINS.map(d=>{
    const objs = d.objectives.map(o=>{
      const stats = objStats(o.id);
      return '<li class="obj-item"><a href="#/objective/'+o.id+'" class="obj-link" data-objid="'+o.id+'"><span>'+o.id+' '+o.title+'</span><span class="obj-badge">'+stats.pct+'%</span></a></li>';
    }).join('');
    return '<div class="domain-block" data-domain="'+d.id+'">'+
      '<div class="domain-header" data-toggle="'+d.id+'">'+icon(d.icon)+'<span style="flex:1">'+d.id+' '+d.title+'</span><span class="domain-weight">'+d.weight+'%</span>'+
      '<span class="domain-chevron">'+icon('external')+'</span></div>'+
      '<ul class="obj-list collapsed" id="objlist-'+d.id+'">'+objs+'</ul></div>';
  }).join('');
  wrap.querySelectorAll('[data-toggle]').forEach(h=>h.addEventListener('click',()=>{
    const id=h.getAttribute('data-toggle');
    document.getElementById('objlist-'+id).classList.toggle('collapsed');
    h.querySelector('.domain-chevron').classList.toggle('open');
  }));
}
function objStats(objId){
  const qs = QBANK.filter(q=>q.obj===objId);
  let seen=0, correct=0;
  qs.forEach(q=>{ if(progress.seen[q.id]){seen++; if(progress.correct[q.id]) correct++; } });
  const pct = qs.length ? Math.round((correct/qs.length)*100) : 0;
  return {total:qs.length, seen, correct, pct};
}
function domainStats(domId){
  const d = DOMAINS.find(x=>x.id===domId);
  let total=0, correct=0;
  d.objectives.forEach(o=>{ const s=objStats(o.id); total+=s.total; correct+=s.correct; });
  return {total, correct, pct: total? Math.round((correct/total)*100):0};
}

/* ============ ROUTER ============ */
let quizState = null;
function route(){
  const hash = location.hash.replace('#/','') || 'dashboard';
  const parts = hash.split('/');
  document.querySelectorAll('.nav-link[data-route]').forEach(a=>a.classList.toggle('active', a.getAttribute('data-route')===parts[0]));
  document.querySelectorAll('.obj-link').forEach(a=>a.classList.remove('active'));
  renderNavDomains();
  document.querySelectorAll('.obj-link').forEach(a=>{ if(parts[0]==='objective' && a.getAttribute('data-objid')===parts[1]) a.classList.add('active'); });
  const main = document.getElementById('main');
  if(parts[0]==='dashboard') renderDashboard(main);
  else if(parts[0]==='quiz') renderQuizStart(main);
  else if(parts[0]==='objective') renderQuizStart(main, parts[1]);
  else if(parts[0]==='flashcards') renderFlashcards(main);
  else if(parts[0]==='pbq') renderPBQList(main);
  else if(parts[0]==='acronyms') renderAcronyms(main);
  else if(parts[0]==='studytips') renderStudyTips(main);
  else if(parts[0]==='settings') renderSettings(main);
  else renderDashboard(main);
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', route);
document.getElementById('menuToggle').addEventListener('click', ()=>document.getElementById('sidebar').classList.toggle('open'));

/* ============ DOWNLOADABLE FILES (generated client-side from the site's own data, no server needed) ============ */
function downloadTextFile(filename, content){
  const blob = new Blob([content], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function buildExamObjectivesText(){
  const lines = [];
  lines.push('COMPTIA SECURITY+ (SY0-701) — EXAM OBJECTIVES');
  lines.push('Compiled reference, generated from Security+ Study Desk');
  lines.push('='.repeat(60));
  lines.push('');
  lines.push('Required exam: SY0-701   Max questions: 90   Length: 90 minutes');
  lines.push('Question types: Multiple-choice and performance-based');
  lines.push('');
  DOMAINS.forEach(d=>{
    lines.push('-'.repeat(60));
    lines.push(d.id+'  '+d.title.toUpperCase()+'   ('+d.weight+'% of exam)');
    lines.push('-'.repeat(60));
    d.objectives.forEach(o=>{
      lines.push('');
      lines.push('  '+o.id+'  '+o.title);
      const cats = TAXONOMY[o.id];
      if(cats){
        cats.forEach(cat=>{
          lines.push('     • '+cat.label+':');
          lines.push('         '+cat.items.join(', '));
        });
      }
    });
    lines.push('');
  });
  lines.push('='.repeat(60));
  lines.push('Generated by Security+ Study Desk. For the official, authoritative');
  lines.push('exam objectives document, see comptia.org/certifications/security.');
  return lines.join('\n');
}
function buildManualText(){
  const lines = [];
  lines.push('SECURITY+ STUDY DESK — USER MANUAL');
  lines.push('SY0-701 practice companion');
  lines.push('='.repeat(60));
  lines.push('');
  lines.push('OVERVIEW');
  lines.push('-'.repeat(60));
  lines.push('This site is a self-contained study tool for the CompTIA Security+');
  lines.push('(SY0-701) exam. It runs entirely in your browser — there is no server');
  lines.push('and no account. All of your progress, settings, and preferences are');
  lines.push('saved locally on this device using browser storage (localStorage) and');
  lines.push('are never transmitted anywhere. Clearing your browser data, or using');
  lines.push('a different browser/device, will reset your saved progress.');
  lines.push('');
  lines.push('NAVIGATION — WHAT EACH SECTION DOES');
  lines.push('-'.repeat(60));
  lines.push('');
  lines.push('Dashboard');
  lines.push('  Your home base. Shows total questions answered, overall accuracy,');
  lines.push('  a donut chart of correct/incorrect/unattempted questions, a chart of');
  lines.push('  the question bank\'s composition, a bar chart comparing your accuracy');
  lines.push('  per domain against that domain\'s real exam weight, PBQ completion');
  lines.push('  stats, and a daily question goal tracker.');
  lines.push('');
  lines.push('Practice Quiz');
  lines.push('  Multiple-choice practice pulled from the full question bank. Choose');
  lines.push('  a batch size (10/25/50/100/all) and answer at your own pace — each');
  lines.push('  question shows the correct answer and an explanation immediately');
  lines.push('  after you answer. You can also launch an objective-specific quiz by');
  lines.push('  clicking any objective (e.g. "4.6") in the left sidebar.');
  lines.push('');
  lines.push('Flashcards');
  lines.push('  Two decks: "Concepts" (key terms and definitions) and "Acronyms"');
  lines.push('  (every official SY0-701 acronym with its expansion and a plain-');
  lines.push('  language explanation), plus an "All" combined view. Click a card to');
  lines.push('  flip it, use Shuffle to randomize order, and switch decks with the');
  lines.push('  tabs at the top of the page.');
  lines.push('');
  lines.push('Performance-Based Questions (PBQ)');
  lines.push('  Matching and ordering exercises modeled on the real exam\'s PBQ');
  lines.push('  format. Each one is tagged to the specific objective it covers —');
  lines.push('  use the domain filter buttons at the top of the list to focus on');
  lines.push('  one domain at a time.');
  lines.push('');
  lines.push('Acronyms');
  lines.push('  A searchable glossary of the full official SY0-701 acronym list.');
  lines.push('  Search matches the acronym, its expansion, AND its explanation, so');
  lines.push('  you can search by concept (e.g. "phishing") and not just by letters.');
  lines.push('');
  lines.push('Study Tips');
  lines.push('  Quick tips plus a full breakdown of eight evidence-based study');
  lines.push('  methods (retrieval practice, spaced repetition, interleaving, and');
  lines.push('  more), each with a "why it works" explanation and specific steps');
  lines.push('  for applying that method using this site\'s features.');
  lines.push('');
  lines.push('Settings');
  lines.push('  Theme (with a live color preview per option), layout (with a mini');
  lines.push('  structural preview per option), a custom accent color override,');
  lines.push('  density, corner style, reduced motion, font size (8-24px, rescales');
  lines.push('  all text on the site), default quiz length, daily question goal,');
  lines.push('  and a full progress reset.');
  lines.push('');
  lines.push('TIPS FOR GETTING THE MOST OUT OF THIS SITE');
  lines.push('-'.repeat(60));
  lines.push('  1. Set a realistic daily goal in Settings and check the Dashboard');
  lines.push('     goal bar each day rather than cramming in one long session.');
  lines.push('  2. Use objective-filtered quizzes (via the sidebar) to target your');
  lines.push('     weakest domains, identified from the Dashboard\'s bar chart.');
  lines.push('  3. Don\'t skip PBQs — they build the same recognition skills the');
  lines.push('     real exam tests with matching and ordering questions.');
  lines.push('  4. Revisit the Acronyms glossary regularly; SY0-701 leans heavily');
  lines.push('     on acronym recognition.');
  lines.push('  5. Read every explanation, even for questions you got right — it');
  lines.push('     reinforces the "why," not just the "what."');
  lines.push('');
  lines.push('='.repeat(60));
  lines.push('Generated by Security+ Study Desk.');
  return lines.join('\n');
}
document.getElementById('downloadObjectivesBtn').addEventListener('click', ()=>{
  downloadTextFile('security-plus-sy0-701-exam-objectives.txt', buildExamObjectivesText());
});
document.getElementById('downloadManualBtn').addEventListener('click', ()=>{
  downloadTextFile('security-plus-study-desk-manual.txt', buildManualText());
});

/* ============ DASHBOARD ============ */
/* ============ CHART HELPERS (pure CSS conic-gradient donuts + flex bar charts, no libraries needed) ============ */
function donutChart(segments, centerLabel, centerSub){
  const total = segments.reduce((s,x)=>s+x.value,0) || 1;
  let acc = 0;
  const stops = segments.map(s=>{
    const start = acc/total*360; acc += s.value; const end = acc/total*360;
    return s.color+' '+start.toFixed(1)+'deg '+end.toFixed(1)+'deg';
  }).join(', ');
  return '<div class="donut" style="background:conic-gradient('+stops+');">'+
    '<div class="donut-center"><b>'+centerLabel+'</b><span>'+centerSub+'</span></div>'+
  '</div>';
}
function chartLegend(segments, showPct){
  const total = segments.reduce((s,x)=>s+x.value,0) || 1;
  return '<div class="chart-legend">'+segments.map(s=>
    '<div class="legend-row"><span class="legend-dot" style="background:'+s.color+'"></span>'+s.label+
    '<b>'+(showPct ? Math.round(s.value/total*100)+'%' : s.value)+'</b></div>'
  ).join('')+'</div>';
}
function domainBarsChart(){
  const maxWeight = Math.max(...DOMAINS.map(d=>d.weight));
  const cols = DOMAINS.map(d=>{
    const s = domainStats(d.id);
    return '<div class="bars-col">'+
      '<div class="bars-pair" title="'+d.id+' — '+s.pct+'% your accuracy vs '+d.weight+'% exam weight">'+
        '<i style="height:'+Math.max(2,s.pct)+'%; background:var(--accent);"></i>'+
        '<i style="height:'+Math.max(2, Math.round(d.weight/maxWeight*100))+'%; background:var(--border);"></i>'+
      '</div>'+
      '<div class="bars-col-label">'+d.id.split('.')[0]+'.0</div>'+
    '</div>';
  }).join('');
  return '<div class="bars-chart">'+cols+'</div>'+
    '<div class="chart-legend" style="flex-direction:row; gap:16px; margin-top:12px; flex-wrap:wrap;">'+
      '<div class="legend-row"><span class="legend-dot" style="background:var(--accent)"></span>Your accuracy</div>'+
      '<div class="legend-row"><span class="legend-dot" style="background:var(--border)"></span>Exam weight (relative)</div>'+
    '</div>';
}

/* ============ DASHBOARD ============ */
function renderDashboard(main){
  const totalQ = QBANK.length;
  let seenCount=0, correctCount=0;
  QBANK.forEach(q=>{ if(progress.seen[q.id]) seenCount++; if(progress.correct[q.id]) correctCount++; });
  const overallPct = seenCount ? Math.round((correctCount/seenCount)*100) : 0;
  const incorrectCount = seenCount - correctCount;
  const unattemptedCount = totalQ - seenCount;

  const domainCards = DOMAINS.map(d=>{
    const s = domainStats(d.id);
    return '<div class="card">'+
      '<div class="card-icon-row">'+icon(d.icon,'icon-lg')+'<strong>'+d.id+' '+d.title+'</strong></div>'+
      '<div class="muted" style="margin-bottom:8px;">Exam weight: '+d.weight+'%</div>'+
      '<div class="progress-track"><div class="progress-fill" style="width:'+s.pct+'%"></div></div>'+
      '<div class="muted" style="margin-top:6px; font-size:0.78rem;">'+s.correct+' / '+s.total+' questions correct</div>'+
      '<a class="btn secondary" style="margin-top:12px; display:inline-block;" href="#/objective/'+d.objectives[0].id+'">Study this domain</a>'+
    '</div>';
  }).join('');

  // Question bank composition by source
  const srcCounts = {core:0, taxonomy:0, acronym:0, flashcard:0};
  QBANK.forEach(q=>{ const s=q.src||'core'; srcCounts[s]=(srcCounts[s]||0)+1; });
  const compSegments = [
    {label:'Hand-authored scenarios', value:srcCounts.core, color:'#3b82f6'},
    {label:'Objective taxonomy', value:srcCounts.taxonomy, color:'#10b981'},
    {label:'Acronym-derived', value:srcCounts.acronym, color:'#f59e0b'},
    {label:'Flashcard-derived', value:srcCounts.flashcard, color:'#a855f7'},
  ];
  const accuracySegments = [
    {label:'Correct', value:correctCount, color:'#16a34a'},
    {label:'Incorrect', value:incorrectCount, color:'#dc2626'},
    {label:'Unattempted', value:unattemptedCount, color:'var(--border)'},
  ];

  // PBQ metrics
  const pbqAttempted = Object.keys(progress.pbq).length;
  const pbqEntries = Object.values(progress.pbq);
  const pbqAvgPct = pbqAttempted ? Math.round(pbqEntries.reduce((s,x)=>s+(x.correct/x.total),0)/pbqAttempted*100) : 0;
  const pbqPerfectCount = pbqEntries.filter(x=>x.correct===x.total).length;

  // Daily goal
  const todayCount = progress.dailyLog[todayKey()] || 0;
  const goal = settings.dailyGoal || 20;
  const goalPct = Math.min(100, Math.round(todayCount/goal*100));
  const daysActive = Object.keys(progress.dailyLog).length;

  // General-reference vs objective-tagged
  const generalRefCount = QBANK.filter(q=>!q.obj).length;

  main.innerHTML =
    '<div class="eyebrow">CompTIA Security+ · SY0-701</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 6px;">Welcome back</h1>'+
    '<p class="muted" style="margin-bottom:24px;">Track your readiness across all five exam domains and jump straight into focused practice.</p>'+

    '<div class="grid grid-3">'+
      '<div class="card"><div class="stat-icon">'+icon('quiz')+'</div><div class="stat-num">'+totalQ+'</div><div class="stat-label">Practice questions</div></div>'+
      '<div class="card"><div class="stat-icon">'+icon('check')+'</div><div class="stat-num">'+overallPct+'%</div><div class="stat-label">Accuracy so far ('+seenCount+' answered)</div></div>'+
      '<div class="card"><div class="stat-icon">'+icon('cards')+'</div><div class="stat-num">'+ALL_FLASHCARDS.length+'</div><div class="stat-label">Flashcards available</div></div>'+
    '</div>'+

    '<div class="card">'+
      '<div class="card-icon-row">'+icon('quiz','icon-lg')+'<strong>Jump into practice</strong></div>'+
      '<p class="muted">Take a mixed quiz across all five domains, weighted toward higher-value objectives.</p>'+
      '<a class="btn" href="#/quiz">Start practice quiz</a> '+
      '<a class="btn secondary" href="#/pbq">Try a PBQ</a>'+
    '</div>'+

    '<h2 style="font-family:var(--font-body); font-size:1.15rem;">Today\'s goal</h2>'+
    '<div class="card">'+
      '<div class="muted" style="display:flex; justify-content:space-between; margin-bottom:2px;"><span>'+todayCount+' of '+goal+' questions answered today</span><span>'+goalPct+'%</span></div>'+
      '<div class="goal-bar-track"><div class="goal-bar-fill" style="width:'+goalPct+'%"></div></div>'+
      '<div class="muted" style="margin-top:8px; font-size:0.78rem;">Active on '+daysActive+' day'+(daysActive===1?'':'s')+' so far. Adjust your daily goal in Settings.</div>'+
    '</div>'+

    '<h2 style="font-family:var(--font-body); font-size:1.15rem;">Performance breakdown</h2>'+
    '<div class="grid grid-2">'+
      '<div class="card"><div class="card-icon-row">'+icon('check','icon-lg')+'<strong>Overall accuracy</strong></div>'+
        '<div class="donut-wrap">'+
          donutChart(accuracySegments, overallPct+'%', 'correct')+
          chartLegend(accuracySegments, false)+
        '</div>'+
      '</div>'+
      '<div class="card"><div class="card-icon-row">'+icon('program','icon-lg')+'<strong>Question bank composition</strong></div>'+
        '<div class="donut-wrap">'+
          donutChart(compSegments, totalQ, 'total questions')+
          chartLegend(compSegments, true)+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="card">'+
      '<div class="card-icon-row">'+icon('dashboard','icon-lg')+'<strong>Your accuracy vs. exam weight, by domain</strong></div>'+
      '<p class="muted" style="margin-bottom:0;">Taller gray bars mean that domain is worth more on the real exam — a good signal for where to focus.</p>'+
      domainBarsChart()+
    '</div>'+

    '<div class="card">'+
      '<div class="card-icon-row">'+icon('pbq','icon-lg')+'<strong>PBQ &amp; reference stats</strong></div>'+
      '<div class="metric-mini-row">'+
        '<div class="metric-mini"><b>'+pbqAttempted+' / '+PBQS.length+'</b><span>PBQs attempted</span></div>'+
        '<div class="metric-mini"><b>'+pbqAvgPct+'%</b><span>Average PBQ score</span></div>'+
        '<div class="metric-mini"><b>'+pbqPerfectCount+'</b><span>Perfect PBQ attempts</span></div>'+
        '<div class="metric-mini"><b>'+generalRefCount+'</b><span>General-reference questions (not tied to one objective)</span></div>'+
      '</div>'+
    '</div>'+

    '<h2 style="font-family:var(--font-body); font-size:1.15rem;">Domain progress</h2>'+
    '<div class="grid grid-2">'+domainCards+'</div>';
}

/* ============ QUIZ ============ */
function renderQuizStart(main, objId){
  const pool = objId ? QBANK.filter(q=>q.obj===objId) : QBANK;
  const label = objId ? (objId+' '+OBJ_INDEX[objId].title) : 'All domains (mixed)';
  const defaultN = Math.min(settings.quizDefaultSize || 10, pool.length);
  const options = [10,25,50,100,pool.length].filter((v,i,a)=>v>0 && a.indexOf(v)===i);
  main.innerHTML =
    '<div class="eyebrow">Practice quiz</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">'+label+'</h1>'+
    '<div class="card">'+
      '<p class="muted">'+pool.length+' questions available in this set. Choose how many to attempt.</p>'+
      '<div style="display:flex; gap:10px; flex-wrap:wrap; margin:14px 0;">'+
        options.map(n=>'<button class="btn '+(n===defaultN?'':'secondary')+'" data-n="'+n+'">'+n+' questions'+(n===defaultN?' (your default)':'')+'</button>').join('')+
      '</div>'+
      '<button class="btn" id="startQuizBtn" data-n="'+defaultN+'">Start quiz ('+defaultN+' questions)</button>'+
    '</div>';
  main.querySelectorAll('[data-n]').forEach(b=>b.addEventListener('click',()=>{
    const n = parseInt(b.getAttribute('data-n'),10);
    startQuiz(pool, n, main);
  }));
}
function startQuiz(pool, n, main){
  const chosen = shuffle(pool).slice(0, Math.min(n, pool.length));
  quizState = {questions:chosen, idx:0, answers:{}, score:0};
  renderQuizQuestion(main);
}
function renderQuizQuestion(main){
  const st = quizState;
  const q = st.questions[st.idx];
  const answered = st.answers[q.id] !== undefined;
  const objLabel = q.obj ? ('Objective '+q.obj) : 'General reference';
  const objMeta = (q.obj && OBJ_INDEX[q.obj]) ? OBJ_INDEX[q.obj].title : 'General IT/security terminology — not tied to a specific numbered objective';
  const choiceHTML = q.c.map((c,i)=>{
    let cls='choice';
    if(answered){
      if(i===q.a) cls+=' correct';
      else if(i===st.answers[q.id]) cls+=' incorrect';
    }
    return '<div class="'+cls+'" data-i="'+i+'"><span class="choice-letter">'+String.fromCharCode(65+i)+'</span><span>'+c+'</span></div>';
  }).join('');
  main.innerHTML =
    '<div class="eyebrow">Question '+(st.idx+1)+' of '+st.questions.length+' · '+objLabel+'</div>'+
    '<div class="card">'+
      '<div class="q-meta">'+objMeta+'</div>'+
      '<div class="q-text">'+q.q+'</div>'+
      '<div id="choiceWrap">'+choiceHTML+'</div>'+
      (answered ? '<div class="explain">'+(st.answers[q.id]===q.a ? '<span class="pill correct">Correct</span> ' : '<span class="pill wrong">Incorrect</span> ')+q.e+'</div>' : '')+
      '<div class="quiz-nav">'+
        '<button class="btn secondary" id="quizExit">Exit to menu</button>'+
        '<button class="btn" id="quizNext" '+(answered?'':'disabled')+'>'+(st.idx===st.questions.length-1?'Finish':'Next question')+'</button>'+
      '</div>'+
    '</div>'+
    '<div class="progress-track"><div class="progress-fill" style="width:'+Math.round(((st.idx)/st.questions.length)*100)+'%"></div></div>';

  if(!answered){
    main.querySelectorAll('#choiceWrap .choice').forEach(el=>el.addEventListener('click',()=>{
      const i = parseInt(el.getAttribute('data-i'),10);
      st.answers[q.id]=i;
      progress.seen[q.id]=true;
      if(i===q.a){ progress.correct[q.id]=true; st.score++; } else { delete progress.correct[q.id]; }
      logDailyActivity();
      saveProgress(progress);
      renderQuizQuestion(main);
    }));
  }
  document.getElementById('quizExit').addEventListener('click',()=>{ location.hash='#/dashboard'; });
  const nextBtn = document.getElementById('quizNext');
  if(answered) nextBtn.addEventListener('click',()=>{
    if(st.idx < st.questions.length-1){ st.idx++; renderQuizQuestion(main); }
    else renderQuizResults(main);
  });
}
function renderQuizResults(main){
  const st = quizState;
  const pct = Math.round((st.score/st.questions.length)*100);
  main.innerHTML =
    '<div class="eyebrow">Quiz complete</div>'+
    '<div class="card" style="text-align:center;">'+
      '<div class="stat-num" style="font-size:2.6rem;">'+pct+'%</div>'+
      '<div class="muted" style="margin-bottom:16px;">'+st.score+' of '+st.questions.length+' correct</div>'+
      '<button class="btn" id="retryBtn">Take another quiz</button> '+
      '<a class="btn secondary" href="#/dashboard">Back to dashboard</a>'+
    '</div>';
  document.getElementById('retryBtn').addEventListener('click',()=>{ location.hash='#/quiz'; });
}

/* ============ FLASHCARDS ============ */
/* Acronym flashcards, generated from the same audited ACRONYMS data used for questions/PBQs,
   so the objective tagging stays consistent everywhere in the app. */
const ACRONYM_FLASHCARDS = ACRONYMS.map(([acr, full, explain])=>({
  t: acr, sub: full, d: explain, obj: classifyAcronym(acr, full), deck:'acronym'
}));
FLASHCARDS.forEach(f=>{ f.deck = 'concept'; });
const ALL_FLASHCARDS = FLASHCARDS.concat(ACRONYM_FLASHCARDS);

let fcState = {order:[], idx:0, flipped:false, deck:'all'};
function fcDeckList(){
  if(fcState.deck==='concept') return FLASHCARDS;
  if(fcState.deck==='acronym') return ACRONYM_FLASHCARDS;
  return ALL_FLASHCARDS;
}
function renderFlashcards(main){
  const deck = fcDeckList();
  if(!fcState.order.length || fcState.order.length !== deck.length || fcState._deckKey !== fcState.deck){
    fcState.order = shuffle(deck.map((_,i)=>i));
    fcState.idx = 0;
    fcState._deckKey = fcState.deck;
  }
  const deckTabs = [
    ['all','All ('+ALL_FLASHCARDS.length+')'],
    ['concept','Concepts ('+FLASHCARDS.length+')'],
    ['acronym','Acronyms ('+ACRONYM_FLASHCARDS.length+')']
  ];
  main.innerHTML =
    '<div class="eyebrow">Flashcards</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">Key terms &amp; acronyms</h1>'+
    '<div class="tab-row">'+deckTabs.map(([k,label])=>'<button class="tab-btn'+(fcState.deck===k?' active':'')+'" data-deck="'+k+'">'+label+'</button>').join('')+'</div>'+
    '<p class="muted">Card '+(fcState.idx+1)+' of '+fcState.order.length+'. Click the card to flip.</p>'+
    '<div class="card flashcard" id="fcCard"></div>'+
    '<div class="fc-controls">'+
      '<button class="btn secondary" id="fcPrev">Previous</button>'+
      '<button class="btn secondary" id="fcShuffle">'+icon('refresh')+' Shuffle</button>'+
      '<button class="btn" id="fcNext">Next</button>'+
    '</div>';
  renderFCCard();
  document.getElementById('fcCard').addEventListener('click',()=>{ fcState.flipped=!fcState.flipped; renderFCCard(); });
  document.getElementById('fcPrev').addEventListener('click',()=>{ fcState.idx=(fcState.idx-1+fcState.order.length)%fcState.order.length; fcState.flipped=false; renderFlashcards(main); });
  document.getElementById('fcNext').addEventListener('click',()=>{ fcState.idx=(fcState.idx+1)%fcState.order.length; fcState.flipped=false; renderFlashcards(main); });
  document.getElementById('fcShuffle').addEventListener('click',()=>{ fcState.order=shuffle(fcDeckList().map((_,i)=>i)); fcState.idx=0; fcState.flipped=false; renderFlashcards(main); });
  main.querySelectorAll('[data-deck]').forEach(b=>b.addEventListener('click',()=>{
    fcState.deck = b.getAttribute('data-deck');
    fcState.order = [];
    fcState.flipped = false;
    renderFlashcards(main);
  }));
}
function renderFCCard(){
  const deck = fcDeckList();
  const card = deck[fcState.order[fcState.idx]];
  const cardEl = document.getElementById('fcCard');
  if(!fcState.flipped){
    cardEl.textContent = card.t;
  } else if(card.deck==='acronym'){
    cardEl.innerHTML = '<span>'+card.sub+'</span>'+(card.d ? '<span class="fc-explain">'+card.d+'</span>' : '');
  } else {
    cardEl.textContent = card.d;
  }
}

/* ============ PBQ ============ */
function renderPBQList(main, domainFilter){
  const filtered = domainFilter ? PBQS.filter(p=>p.obj && p.obj.startsWith(domainFilter[0])) : PBQS;
  const filterBar = '<div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">'+
    '<button class="btn '+(!domainFilter?'':'secondary')+'" data-domfilter="">All ('+PBQS.length+')</button>'+
    DOMAINS.map(d=>{
      const n = PBQS.filter(p=>p.obj && p.obj.startsWith(d.id[0])).length;
      return '<button class="btn '+(domainFilter===d.id?'':'secondary')+'" data-domfilter="'+d.id+'">'+d.id+' ('+n+')</button>';
    }).join('')+
  '</div>';
  main.innerHTML =
    '<div class="eyebrow">Performance-Based Questions</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">Scenario practice</h1>'+
    '<p class="muted">PBQs on the real exam use matching, ordering, and drag-and-drop. Every exercise below is tagged to the exam objective it draws from.</p>'+
    filterBar+
    '<div class="grid grid-2">'+filtered.map(p=>{
      const i = PBQS.indexOf(p);
      const objLabel = p.obj ? (p.obj+' · '+OBJ_INDEX[p.obj].title) : 'General reference';
      return '<div class="card"><div class="card-icon-row">'+icon('pbq','icon-lg')+'<strong>'+p.title+'</strong></div>'+
        '<div class="muted" style="margin-bottom:4px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.03em;">'+objLabel+'</div>'+
        '<div class="muted" style="margin-bottom:12px;">'+(p.type==='match'?'Matching exercise':'Ordering exercise')+'</div>'+
        '<a class="btn" href="#/pbqitem/'+i+'">Start</a></div>';
    }).join('')+
    '</div>';
  main.querySelectorAll('[data-domfilter]').forEach(b=>b.addEventListener('click',()=>{
    renderPBQList(main, b.getAttribute('data-domfilter')||null);
  }));
}
function renderPBQItem(main, i){
  const p = PBQS[i];
  const objLabel = p.obj ? (p.obj+' · '+OBJ_INDEX[p.obj].title) : 'General reference';
  main.innerHTML = '<div class="eyebrow">Performance-Based Question · '+objLabel+'</div><h1 style="font-family:var(--font-body); margin:0 0 10px;">'+p.title+'</h1><div class="card" id="pbqBody"></div><div class="quiz-nav"><a class="btn secondary" href="#/pbq">Back to list</a><button class="btn" id="pbqCheck">Check answers</button></div>';
  const body = document.getElementById('pbqBody');
  if(p.type==='match'){
    body.innerHTML = p.pairs.map((pair,idx)=>
      '<div class="match-row"><div>'+pair[0]+'</div><select class="match-select" data-idx="'+idx+'"><option value="">— choose —</option>'+
      p.options.map(o=>'<option value="'+o.replace(/"/g,'&quot;')+'">'+o+'</option>').join('')+'</select></div>'
    ).join('');
  } else {
    const shuffled = shuffle(p.items.map((t,idx)=>({t,idx})));
    body.innerHTML = '<p class="muted">Drag to reorder into the correct sequence (top = first).</p><div id="pbqOrderList">'+
      shuffled.map(s=>'<div class="pbq-item" draggable="true" data-correct="'+s.idx+'">'+icon('flag')+'<span>'+s.t+'</span></div>').join('')+'</div>';
    enableDrag(document.getElementById('pbqOrderList'));
  }
  document.getElementById('pbqCheck').addEventListener('click',()=>{
    if(p.type==='match'){
      let correct=0;
      body.querySelectorAll('.match-select').forEach(sel=>{
        const idx = parseInt(sel.getAttribute('data-idx'),10);
        const ok = sel.value === p.pairs[idx][1];
        sel.style.borderColor = sel.value ? (ok?'var(--success)':'var(--danger)') : 'var(--border)';
        if(ok) correct++;
      });
      showPbqResult(correct, p.pairs.length, i);
    } else {
      const items = [...body.querySelectorAll('.pbq-item')];
      let correct=0;
      items.forEach((el,idx)=>{ if(parseInt(el.getAttribute('data-correct'),10)===idx){ correct++; el.style.borderColor='var(--success)'; } else { el.style.borderColor='var(--danger)'; } });
      showPbqResult(correct, items.length, i);
    }
  });
}
function showPbqResult(correct,total,pbqIndex){
  let el = document.getElementById('pbqResult');
  if(!el){ el=document.createElement('div'); el.id='pbqResult'; el.className='explain'; document.getElementById('pbqBody').appendChild(el); }
  el.innerHTML = '<span class="pill '+(correct===total?'correct':'wrong')+'">'+correct+' / '+total+' correct</span>';
  if(pbqIndex!==undefined){
    progress.pbq[pbqIndex] = {correct, total, at: Date.now()};
    saveProgress(progress);
  }
}
function enableDrag(list){
  let dragEl=null;
  list.querySelectorAll('.pbq-item').forEach(item=>{
    item.addEventListener('dragstart',()=>{ dragEl=item; item.classList.add('dragging'); });
    item.addEventListener('dragend',()=>{ item.classList.remove('dragging'); dragEl=null; });
  });
  list.addEventListener('dragover',e=>{
    e.preventDefault();
    const after = [...list.querySelectorAll('.pbq-item:not(.dragging)')].reduce((closest,child)=>{
      const box = child.getBoundingClientRect();
      const offset = e.clientY - box.top - box.height/2;
      if(offset<0 && offset>closest.offset) return {offset, element:child};
      return closest;
    }, {offset:-Infinity, element:null}).element;
    if(!dragEl) return;
    if(after==null) list.appendChild(dragEl); else list.insertBefore(dragEl, after);
  });
}

/* ============ ACRONYMS ============ */
function renderAcronyms(main){
  main.innerHTML =
    '<div class="eyebrow">Reference</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">Acronym glossary</h1>'+
    '<p class="muted">The SY0-701 exam draws heavily on this official CompTIA acronym list, each with a plain-language explanation of what it means for security. Search to filter.</p>'+
    '<div class="acr-toolbar"><input class="acr-search" id="acrSearch" placeholder="Search acronyms, expansions, or explanations…"></div>'+
    '<div class="card"><table class="acr-table" id="acrTable"><thead><tr><th style="width:100px;">Acronym</th><th style="width:220px;">Meaning</th><th>Explanation</th></tr></thead><tbody></tbody></table></div>';
  const tbody = document.querySelector('#acrTable tbody');
  function draw(filter){
    const f = (filter||'').toLowerCase();
    const rows = ACRONYMS.filter(([a,b,c])=> !f || a.toLowerCase().includes(f) || b.toLowerCase().includes(f) || (c||'').toLowerCase().includes(f));
    tbody.innerHTML = rows.map(([a,b,c])=>'<tr><td><strong>'+a+'</strong></td><td>'+b+'</td><td class="muted">'+(c||'')+'</td></tr>').join('') || '<tr><td colspan="3" class="muted">No matches.</td></tr>';
  }
  draw('');
  document.getElementById('acrSearch').addEventListener('input', e=>draw(e.target.value));
}

/* ============ STUDY TIPS ============ */
function renderStudyTips(main){
  main.innerHTML =
    '<div class="eyebrow">Guidance</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 4px;">Study tips</h1>'+
    '<p class="muted" style="margin-bottom:18px;">Quick tips first, then a full breakdown of study methods with exactly how to run each one in this app.</p>'+
    TIPS.map(t=>
      '<div class="card tip-card">'+
        '<div class="tip-head"><div class="tip-icon">'+icon(t.icon)+'</div><div><strong>'+t.title+'</strong><p class="muted" style="margin:4px 0 0;">'+t.body+'</p></div></div>'+
        '<ul class="tip-list">'+t.list.map(li=>'<li>'+li+'</li>').join('')+'</ul>'+
      '</div>'
    ).join('')+
    '<div class="card tip-apply"><strong>Exam-day reminder:</strong> SY0-701 allows a maximum of 90 questions in 90 minutes, mixing multiple-choice and performance-based items across all five domains.</div>'+
    '<h2 style="font-family:var(--font-body); font-size:1.2rem; margin-top:32px;">Study methods, in depth</h2>'+
    '<p class="muted" style="margin-bottom:16px;">Eight evidence-based study techniques, each with why it works and exactly which feature of this app to use to apply it.</p>'+
    STUDY_METHODS.map(m=>
      '<div class="card method-card">'+
        '<div class="method-head">'+icon(m.icon,'icon-lg')+'<div><strong style="font-family:var(--font-body); font-size:1.05rem;">'+m.name+'</strong><p class="muted" style="margin:4px 0 0;">'+m.summary+'</p></div></div>'+
        '<div class="method-cols">'+
          '<div class="method-col"><div class="method-col-title">Why it works</div><ul>'+m.breakdown.map(li=>'<li>'+li+'</li>').join('')+'</ul></div>'+
          '<div class="method-col"><div class="method-col-title">Apply it in this app</div><ul>'+m.application.map(li=>'<li>'+li+'</li>').join('')+'</ul></div>'+
        '</div>'+
      '</div>'
    ).join('');
}

/* ============ SETTINGS ============ */
const THEME_GROUPS = {
  'Core': ['light','dark','sepia','high-contrast','plain','mono'],
  'Solarized / Editor': ['solarized-light','solarized-dark','nord','dracula'],
  'Nature': ['ocean','forest','sunset','pastel','rose','slate','neon'],
  'Aurora': ['aurora-dawn','aurora-dusk','aurora-night'],
  'Autumn': ['autumn-amber','autumn-rust','autumn-umber'],
  'Reef': ['reef-shallow','reef-lagoon','reef-abyss'],
  'Desert': ['desert-dune','desert-mesa','desert-canyon'],
  'Lavender': ['lavender-bloom','lavender-dusk','lavender-twilight'],
  'Meadow': ['meadow-spring','meadow-summer','meadow-moss'],
  'Retro': ['retro-cream','retro-mustard','retro-avocado','retro-rust'],
  'Royal': ['royal-gold','royal-sapphire','royal-amethyst'],
  'Volcanic': ['volcanic-ember','volcanic-magma','volcanic-obsidian'],
  'Arctic': ['arctic-frost','arctic-glacier','arctic-polar-night'],
};
const LAYOUTS = [
  {id:'default', label:'Sidebar left (default)', cls:'lp-default'},
  {id:'sidebar-right', label:'Sidebar right', cls:'lp-sidebar-right'},
  {id:'top-bar', label:'Top bar', cls:'lp-top-bar'},
  {id:'bottom-bar', label:'Bottom bar', cls:'lp-bottom-bar'},
  {id:'top-tabs', label:'Top tabs', cls:'lp-top-tabs'},
  {id:'boxed', label:'Boxed', cls:'lp-boxed'},
  {id:'drawer', label:'Drawer', cls:'lp-drawer'},
  {id:'floating', label:'Floating', cls:'lp-floating'},
  {id:'icon-rail', label:'Icon rail', cls:'lp-icon-rail'},
  {id:'wide-panel', label:'Wide panel', cls:'lp-wide-panel'},
];
function layoutPreviewHTML(l){
  return '<div class="layout-preview '+l.cls+'"><div class="lp-side">'+(l.cls==='lp-top-tabs'?'<i></i><i></i><i></i>':'')+'</div><div class="lp-main"><i></i><i></i><i></i></div></div>';
}
function themeSwatchHTML(t, isActive){
  const c = THEME_COLOR_MAP[t] || THEME_COLOR_MAP.light;
  return '<button class="theme-swatch'+(isActive?' active':'')+'" data-theme="'+t+'" title="'+t+'">'+
    '<span class="swatch-preview">'+
      '<i style="background:'+c.bg+'"></i>'+
      '<i style="background:'+c.bgElev+'"></i>'+
      '<i style="background:'+c.accent+'"></i>'+
    '</span>'+
    '<span class="swatch-label-row" style="background:'+c.bgElev+'; color:'+c.text+';">'+
      '<span>'+t+'</span>'+
      (isActive ? '<span class="swatch-check" style="background:'+c.accent+';">'+icon('check')+'</span>' : '')+
    '</span>'+
  '</button>';
}
const ACCENT_PRESETS = ['#2f5d50','#2563eb','#7c3aed','#dc2626','#f59e0b','#0ea5e9','#16a34a','#db2777'];
function renderSettings(main){
  const fs = settings.fontSize || DEFAULT_FONT_SIZE;
  main.innerHTML =
    '<div class="eyebrow">Preferences</div>'+
    '<h1 style="font-family:var(--font-body); margin:0 0 10px;">Settings</h1>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Theme <span class="muted" style="font-weight:400; font-size:0.8rem;">— live color preview per option</span></strong>'+
      Object.entries(THEME_GROUPS).map(([group,list])=>
        '<div class="theme-group"><div class="theme-group-title">'+group+'</div><div class="theme-row">'+
          list.map(t=>themeSwatchHTML(t, settings.theme===t)).join('')+
        '</div></div>'
      ).join('')+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Layout <span class="muted" style="font-weight:400; font-size:0.8rem;">— mini preview of each structure</span></strong>'+
      '<div class="theme-row">'+
        LAYOUTS.map(l=>'<button class="theme-swatch layout-option'+((settings.layout||'default')===l.id?' active':'')+'" data-layout="'+l.id+'">'+
          layoutPreviewHTML(l)+
          '<span class="layout-option-label">'+l.label+'</span>'+
        '</button>').join('')+
      '</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Accent color <span class="muted" style="font-weight:400; font-size:0.8rem;">— overrides the current theme\'s accent everywhere</span></strong>'+
      '<div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:12px;">'+
        '<input type="color" id="accentPicker" value="'+(settings.accent || THEME_COLOR_MAP[settings.theme]?.accent || '#2f5d50')+'" style="width:48px; height:38px; border:1px solid var(--border); border-radius:var(--radius-sm); padding:2px; background:var(--bg-elev); cursor:pointer;">'+
        '<button class="btn secondary" id="accentReset">Use theme default</button>'+
        (settings.accent ? '<span class="pill">Custom accent active</span>' : '')+
      '</div>'+
      '<div class="theme-row">'+ACCENT_PRESETS.map(c=>'<button class="theme-swatch" data-accent-preset="'+c+'" style="min-height:32px; background:'+c+';" title="'+c+'"></button>').join('')+'</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Density</strong>'+
      '<div class="theme-row">'+
        [['compact','Compact'],['comfortable','Comfortable'],['spacious','Spacious']].map(([k,label])=>
          '<button class="btn '+((settings.density||'comfortable')===k?'':'secondary')+'" data-density="'+k+'">'+label+'</button>'
        ).join('')+
      '</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Corner style</strong>'+
      '<div class="theme-row">'+
        [['theme','Theme default'],['sharp','Sharp'],['soft','Soft'],['rounded','Rounded'],['pill','Extra round']].map(([k,label])=>
          '<button class="btn '+((settings.radius||'theme')===k?'':'secondary')+'" data-radius="'+k+'" style="border-radius:'+(RADIUS_PRESETS[k]||'10px')+';">'+label+'</button>'
        ).join('')+
      '</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Motion</strong>'+
      '<div class="theme-row">'+
        [['normal','Normal'],['reduced','Reduced motion']].map(([k,label])=>
          '<button class="btn '+((settings.motion||'normal')===k?'':'secondary')+'" data-motion="'+k+'">'+label+'</button>'
        ).join('')+
      '</div>'+
      '<p class="muted" style="margin:8px 0 0; font-size:0.8rem;">Reduced motion turns off transitions and animations across the site.</p>'+
    '</div>'+

    '<div class="card">'+
      '<strong style="display:block;margin-bottom:10px;">Font size <span class="muted" style="font-weight:400; font-size:0.8rem;">— rescales all text on the site, 8–24px</span></strong>'+
      '<div class="fontsize-row">'+
        '<span class="muted" style="font-size:0.75rem;">8</span>'+
        '<input type="range" id="fontSizeRange" min="8" max="24" step="1" value="'+fs+'">'+
        '<span class="muted" style="font-size:0.75rem;">24</span>'+
        '<span class="fontsize-val" id="fontSizeVal">'+fs+'px</span>'+
      '</div>'+
      '<div class="fontsize-preview" id="fontSizePreview">The quick brown fox jumps over the lazy dog. AAA, CIA, PKI, RBAC.</div>'+
    '</div>'+

    '<div class="card"><strong style="display:block;margin-bottom:10px;">Study tools</strong>'+
      '<div class="setting-row"><span>Default quiz length</span>'+
        '<select id="quizDefaultSize" style="padding:7px 10px; border-radius:var(--radius-sm); border:1px solid var(--border); background:var(--bg-elev); color:var(--text);">'+
          [5,10,25,50,100].map(n=>'<option value="'+n+'" '+((settings.quizDefaultSize||10)===n?'selected':'')+'>'+n+' questions</option>').join('')+
        '</select>'+
      '</div>'+
      '<div class="setting-row" style="border-bottom:none;"><span>Daily question goal</span>'+
        '<input type="number" id="dailyGoalInput" min="5" max="500" step="5" value="'+(settings.dailyGoal||20)+'" style="width:90px; padding:7px 10px; border-radius:var(--radius-sm); border:1px solid var(--border); background:var(--bg-elev); color:var(--text);">'+
      '</div>'+
    '</div>'+

    '<div class="card">'+
      '<div class="setting-row" style="border-bottom:none;"><span>Reset all progress</span><button class="btn secondary" id="resetProgress">Reset</button></div>'+
    '</div>';

  main.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>{ settings.theme=b.getAttribute('data-theme'); settings.accent=''; saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-layout]').forEach(b=>b.addEventListener('click',()=>{ settings.layout=b.getAttribute('data-layout'); saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-density]').forEach(b=>b.addEventListener('click',()=>{ settings.density=b.getAttribute('data-density'); saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-radius]').forEach(b=>b.addEventListener('click',()=>{ settings.radius=b.getAttribute('data-radius'); saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-motion]').forEach(b=>b.addEventListener('click',()=>{ settings.motion=b.getAttribute('data-motion'); saveSettings(settings); applySettings(); renderSettings(main); }));
  main.querySelectorAll('[data-accent-preset]').forEach(b=>b.addEventListener('click',()=>{ settings.accent=b.getAttribute('data-accent-preset'); saveSettings(settings); applySettings(); renderSettings(main); }));
  document.getElementById('accentPicker').addEventListener('input', e=>{ settings.accent = e.target.value; saveSettings(settings); applySettings(); });
  document.getElementById('accentPicker').addEventListener('change', ()=>{ renderSettings(main); });
  document.getElementById('accentReset').addEventListener('click', ()=>{ settings.accent=''; saveSettings(settings); applySettings(); renderSettings(main); });
  document.getElementById('fontSizeRange').addEventListener('input', e=>{
    settings.fontSize = parseInt(e.target.value,10);
    saveSettings(settings); applySettings();
    document.getElementById('fontSizeVal').textContent = settings.fontSize+'px';
  });
  document.getElementById('quizDefaultSize').addEventListener('change', e=>{ settings.quizDefaultSize=parseInt(e.target.value,10); saveSettings(settings); });
  document.getElementById('dailyGoalInput').addEventListener('change', e=>{
    const v = Math.max(1, parseInt(e.target.value,10)||20);
    settings.dailyGoal = v; saveSettings(settings);
  });
  document.getElementById('resetProgress').addEventListener('click',()=>{ progress={seen:{},correct:{},flashSeen:{},pbq:{},dailyLog:{}}; saveProgress(progress); alert('Progress reset.'); route(); });
}

/* PBQ item route hook */
window.addEventListener('hashchange', ()=>{
  const parts = location.hash.replace('#/','').split('/');
  if(parts[0]==='pbqitem'){ renderPBQItem(document.getElementById('main'), parseInt(parts[1],10)); document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active', a.getAttribute('data-route')==='pbq')); }
});

route();
if(location.hash.startsWith('#/pbqitem/')) renderPBQItem(document.getElementById('main'), parseInt(location.hash.split('/')[2],10));