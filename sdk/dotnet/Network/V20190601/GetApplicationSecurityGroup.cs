// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190601
{
    public static class GetApplicationSecurityGroup
    {
        public static Task<GetApplicationSecurityGroupResult> InvokeAsync(GetApplicationSecurityGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApplicationSecurityGroupResult>("azure-nextgen:network/v20190601:getApplicationSecurityGroup", args ?? new GetApplicationSecurityGroupArgs(), options.WithVersion());
    }


    public sealed class GetApplicationSecurityGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the application security group.
        /// </summary>
        [Input("applicationSecurityGroupName", required: true)]
        public string ApplicationSecurityGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetApplicationSecurityGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApplicationSecurityGroupResult
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
        /// </summary>
        public readonly string ResourceGuid;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetApplicationSecurityGroupResult(
            string etag,

            string? id,

            string? location,

            string name,

            string provisioningState,

            string resourceGuid,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            ResourceGuid = resourceGuid;
            Tags = tags;
            Type = type;
        }
    }
}
