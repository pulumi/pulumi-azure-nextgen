// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AVS.V20200717Preview
{
    public static class GetAuthorization
    {
        public static Task<GetAuthorizationResult> InvokeAsync(GetAuthorizationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAuthorizationResult>("azure-nextgen:avs/v20200717preview:getAuthorization", args ?? new GetAuthorizationArgs(), options.WithVersion());
    }


    public sealed class GetAuthorizationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the ExpressRoute Circuit Authorization in the private cloud
        /// </summary>
        [Input("authorizationName", required: true)]
        public string AuthorizationName { get; set; } = null!;

        /// <summary>
        /// Name of the private cloud
        /// </summary>
        [Input("privateCloudName", required: true)]
        public string PrivateCloudName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAuthorizationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAuthorizationResult
    {
        /// <summary>
        /// The ID of the ExpressRoute Circuit Authorization
        /// </summary>
        public readonly string ExpressRouteAuthorizationId;
        /// <summary>
        /// The key of the ExpressRoute Circuit Authorization
        /// </summary>
        public readonly string ExpressRouteAuthorizationKey;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The state of the  ExpressRoute Circuit Authorization provisioning
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAuthorizationResult(
            string expressRouteAuthorizationId,

            string expressRouteAuthorizationKey,

            string id,

            string name,

            string provisioningState,

            string type)
        {
            ExpressRouteAuthorizationId = expressRouteAuthorizationId;
            ExpressRouteAuthorizationKey = expressRouteAuthorizationKey;
            Id = id;
            Name = name;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
