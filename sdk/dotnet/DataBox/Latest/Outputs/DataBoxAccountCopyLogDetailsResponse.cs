// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBox.Latest.Outputs
{

    [OutputType]
    public sealed class DataBoxAccountCopyLogDetailsResponse
    {
        /// <summary>
        /// Account name.
        /// </summary>
        public readonly string AccountName;
        /// <summary>
        /// Indicates the type of job details.
        /// Expected value is 'DataBox'.
        /// </summary>
        public readonly string CopyLogDetailsType;
        /// <summary>
        /// Link for copy logs.
        /// </summary>
        public readonly string CopyLogLink;
        /// <summary>
        /// Link for copy verbose logs. This will be set only when LogCollectionLevel is set to Verbose.
        /// </summary>
        public readonly string CopyVerboseLogLink;

        [OutputConstructor]
        private DataBoxAccountCopyLogDetailsResponse(
            string accountName,

            string copyLogDetailsType,

            string copyLogLink,

            string copyVerboseLogLink)
        {
            AccountName = accountName;
            CopyLogDetailsType = copyLogDetailsType;
            CopyLogLink = copyLogLink;
            CopyVerboseLogLink = copyVerboseLogLink;
        }
    }
}
