// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.NetApp.V20200901.Inputs
{

    /// <summary>
    /// Active Directory
    /// </summary>
    public sealed class ActiveDirectoryArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Id of the Active Directory
        /// </summary>
        [Input("activeDirectoryId")]
        public Input<string>? ActiveDirectoryId { get; set; }

        /// <summary>
        /// Name of the active directory machine. This optional parameter is used only while creating kerberos volume
        /// </summary>
        [Input("adName")]
        public Input<string>? AdName { get; set; }

        /// <summary>
        /// If enabled, AES encryption will be enabled for SMB communication.
        /// </summary>
        [Input("aesEncryption")]
        public Input<bool>? AesEncryption { get; set; }

        [Input("backupOperators")]
        private InputList<string>? _backupOperators;

        /// <summary>
        /// Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
        /// </summary>
        public InputList<string> BackupOperators
        {
            get => _backupOperators ?? (_backupOperators = new InputList<string>());
            set => _backupOperators = value;
        }

        /// <summary>
        /// Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
        /// </summary>
        [Input("dns")]
        public Input<string>? Dns { get; set; }

        /// <summary>
        /// Name of the Active Directory domain
        /// </summary>
        [Input("domain")]
        public Input<string>? Domain { get; set; }

        /// <summary>
        /// kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume.
        /// </summary>
        [Input("kdcIP")]
        public Input<string>? KdcIP { get; set; }

        /// <summary>
        /// Specifies whether or not the LDAP traffic needs to be signed.
        /// </summary>
        [Input("ldapSigning")]
        public Input<bool>? LdapSigning { get; set; }

        /// <summary>
        /// The Organizational Unit (OU) within the Windows Active Directory
        /// </summary>
        [Input("organizationalUnit")]
        public Input<string>? OrganizationalUnit { get; set; }

        /// <summary>
        /// Plain text password of Active Directory domain administrator, value is masked in the response
        /// </summary>
        [Input("password")]
        public Input<string>? Password { get; set; }

        [Input("securityOperators")]
        private InputList<string>? _securityOperators;

        /// <summary>
        /// Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
        /// </summary>
        public InputList<string> SecurityOperators
        {
            get => _securityOperators ?? (_securityOperators = new InputList<string>());
            set => _securityOperators = value;
        }

        /// <summary>
        /// When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
        /// </summary>
        [Input("serverRootCACertificate")]
        public Input<string>? ServerRootCACertificate { get; set; }

        /// <summary>
        /// The Active Directory site the service will limit Domain Controller discovery to
        /// </summary>
        [Input("site")]
        public Input<string>? Site { get; set; }

        /// <summary>
        /// NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
        /// </summary>
        [Input("smbServerName")]
        public Input<string>? SmbServerName { get; set; }

        /// <summary>
        /// Username of Active Directory domain administrator
        /// </summary>
        [Input("username")]
        public Input<string>? Username { get; set; }

        public ActiveDirectoryArgs()
        {
        }
    }
}
