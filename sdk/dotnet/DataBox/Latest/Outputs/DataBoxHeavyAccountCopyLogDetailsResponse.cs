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
    public sealed class DataBoxHeavyAccountCopyLogDetailsResponse
    {
        /// <summary>
        /// Account name.
        /// </summary>
        public readonly string AccountName;
        /// <summary>
        /// Indicates the type of job details.
        /// Expected value is 'DataBoxHeavy'.
        /// </summary>
        public readonly string CopyLogDetailsType;
        /// <summary>
        /// Link for copy logs.
        /// </summary>
        public readonly ImmutableArray<string> CopyLogLink;
        /// <summary>
        /// Link for copy verbose logs. This will be set only when the LogCollectionLevel is set to verbose.
        /// </summary>
        public readonly ImmutableArray<string> CopyVerboseLogLink;

        [OutputConstructor]
        private DataBoxHeavyAccountCopyLogDetailsResponse(
            string accountName,

            string copyLogDetailsType,

            ImmutableArray<string> copyLogLink,

            ImmutableArray<string> copyVerboseLogLink)
        {
            AccountName = accountName;
            CopyLogDetailsType = copyLogDetailsType;
            CopyLogLink = copyLogLink;
            CopyVerboseLogLink = copyVerboseLogLink;
        }
    }
}
