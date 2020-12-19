// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBox.V20201101.Outputs
{

    [OutputType]
    public sealed class DataBoxDiskJobSecretsResponseResult
    {
        /// <summary>
        /// Dc Access Security Code for Customer Managed Shipping
        /// </summary>
        public readonly Outputs.DcAccessSecurityCodeResponseResult DcAccessSecurityCode;
        /// <summary>
        /// Contains the list of secrets object for that device.
        /// </summary>
        public readonly ImmutableArray<Outputs.DiskSecretResponseResult> DiskSecrets;
        /// <summary>
        /// Error while fetching the secrets.
        /// </summary>
        public readonly Outputs.CloudErrorResponse Error;
        /// <summary>
        /// Whether passkey was provided by user.
        /// </summary>
        public readonly bool IsPasskeyUserDefined;
        /// <summary>
        /// Used to indicate what type of job secrets object.
        /// Expected value is 'DataBoxDisk'.
        /// </summary>
        public readonly string JobSecretsType;
        /// <summary>
        /// PassKey for the disk Job.
        /// </summary>
        public readonly string PassKey;

        [OutputConstructor]
        private DataBoxDiskJobSecretsResponseResult(
            Outputs.DcAccessSecurityCodeResponseResult dcAccessSecurityCode,

            ImmutableArray<Outputs.DiskSecretResponseResult> diskSecrets,

            Outputs.CloudErrorResponse error,

            bool isPasskeyUserDefined,

            string jobSecretsType,

            string passKey)
        {
            DcAccessSecurityCode = dcAccessSecurityCode;
            DiskSecrets = diskSecrets;
            Error = error;
            IsPasskeyUserDefined = isPasskeyUserDefined;
            JobSecretsType = jobSecretsType;
            PassKey = passKey;
        }
    }
}
