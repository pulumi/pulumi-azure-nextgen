// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DBforPostgreSQL.V20201005PrivatePreview.Outputs
{

    [OutputType]
    public sealed class ServerGroupPropertiesResponseDelegatedSubnetArguments
    {
        /// <summary>
        /// delegated subnet arm resource id.
        /// </summary>
        public readonly string? SubnetArmResourceId;

        [OutputConstructor]
        private ServerGroupPropertiesResponseDelegatedSubnetArguments(string? subnetArmResourceId)
        {
            SubnetArmResourceId = subnetArmResourceId;
        }
    }
}
