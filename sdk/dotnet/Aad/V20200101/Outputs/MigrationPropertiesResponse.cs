// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Aad.V20200101.Outputs
{

    [OutputType]
    public sealed class MigrationPropertiesResponse
    {
        /// <summary>
        /// Migration Progress
        /// </summary>
        public readonly Outputs.MigrationProgressResponse MigrationProgress;
        /// <summary>
        /// Old Subnet Id
        /// </summary>
        public readonly string OldSubnetId;
        /// <summary>
        /// Old Vnet Site Id
        /// </summary>
        public readonly string OldVnetSiteId;

        [OutputConstructor]
        private MigrationPropertiesResponse(
            Outputs.MigrationProgressResponse migrationProgress,

            string oldSubnetId,

            string oldVnetSiteId)
        {
            MigrationProgress = migrationProgress;
            OldSubnetId = oldSubnetId;
            OldVnetSiteId = oldVnetSiteId;
        }
    }
}