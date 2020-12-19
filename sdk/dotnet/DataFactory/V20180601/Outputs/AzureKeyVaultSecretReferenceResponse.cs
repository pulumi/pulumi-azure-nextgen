// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Outputs
{

    [OutputType]
    public sealed class AzureKeyVaultSecretReferenceResponse
    {
        /// <summary>
        /// The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object SecretName;
        /// <summary>
        /// The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? SecretVersion;
        /// <summary>
        /// The Azure Key Vault linked service reference.
        /// </summary>
        public readonly Outputs.LinkedServiceReferenceResponse Store;
        /// <summary>
        /// Type of the secret.
        /// Expected value is 'AzureKeyVaultSecret'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private AzureKeyVaultSecretReferenceResponse(
            object secretName,

            object? secretVersion,

            Outputs.LinkedServiceReferenceResponse store,

            string type)
        {
            SecretName = secretName;
            SecretVersion = secretVersion;
            Store = store;
            Type = type;
        }
    }
}
