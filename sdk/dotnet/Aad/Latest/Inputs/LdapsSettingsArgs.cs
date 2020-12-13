// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Aad.Latest.Inputs
{

    /// <summary>
    /// Secure LDAP Settings
    /// </summary>
    public sealed class LdapsSettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
        /// </summary>
        [Input("externalAccess")]
        public InputUnion<string, Pulumi.AzureNextGen.Aad.Latest.ExternalAccess>? ExternalAccess { get; set; }

        /// <summary>
        /// A flag to determine whether or not Secure LDAP is enabled or disabled.
        /// </summary>
        [Input("ldaps")]
        public InputUnion<string, Pulumi.AzureNextGen.Aad.Latest.Ldaps>? Ldaps { get; set; }

        /// <summary>
        /// The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
        /// </summary>
        [Input("pfxCertificate")]
        public Input<string>? PfxCertificate { get; set; }

        /// <summary>
        /// The password to decrypt the provided Secure LDAP certificate pfx file.
        /// </summary>
        [Input("pfxCertificatePassword")]
        public Input<string>? PfxCertificatePassword { get; set; }

        public LdapsSettingsArgs()
        {
        }
    }
}
