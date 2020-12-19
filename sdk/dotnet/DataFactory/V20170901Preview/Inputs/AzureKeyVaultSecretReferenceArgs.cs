// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Inputs
{

    /// <summary>
    /// Azure Key Vault secret reference.
    /// </summary>
    public sealed class AzureKeyVaultSecretReferenceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("secretName", required: true)]
        public Input<object> SecretName { get; set; } = null!;

        /// <summary>
        /// The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("secretVersion")]
        public Input<object>? SecretVersion { get; set; }

        /// <summary>
        /// The Azure Key Vault linked service reference.
        /// </summary>
        [Input("store", required: true)]
        public Input<Inputs.LinkedServiceReferenceArgs> Store { get; set; } = null!;

        /// <summary>
        /// Type of the secret.
        /// Expected value is 'AzureKeyVaultSecret'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public AzureKeyVaultSecretReferenceArgs()
        {
        }
    }
}
