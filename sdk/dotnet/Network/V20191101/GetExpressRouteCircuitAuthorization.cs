// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20191101
{
    public static class GetExpressRouteCircuitAuthorization
    {
        public static Task<GetExpressRouteCircuitAuthorizationResult> InvokeAsync(GetExpressRouteCircuitAuthorizationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetExpressRouteCircuitAuthorizationResult>("azure-nextgen:network/v20191101:getExpressRouteCircuitAuthorization", args ?? new GetExpressRouteCircuitAuthorizationArgs(), options.WithVersion());
    }


    public sealed class GetExpressRouteCircuitAuthorizationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the authorization.
        /// </summary>
        [Input("authorizationName", required: true)]
        public string AuthorizationName { get; set; } = null!;

        /// <summary>
        /// The name of the express route circuit.
        /// </summary>
        [Input("circuitName", required: true)]
        public string CircuitName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetExpressRouteCircuitAuthorizationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetExpressRouteCircuitAuthorizationResult
    {
        /// <summary>
        /// The authorization key.
        /// </summary>
        public readonly string? AuthorizationKey;
        /// <summary>
        /// The authorization use status.
        /// </summary>
        public readonly string? AuthorizationUseStatus;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The provisioning state of the authorization resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetExpressRouteCircuitAuthorizationResult(
            string? authorizationKey,

            string? authorizationUseStatus,

            string etag,

            string? id,

            string? name,

            string provisioningState,

            string type)
        {
            AuthorizationKey = authorizationKey;
            AuthorizationUseStatus = authorizationUseStatus;
            Etag = etag;
            Id = id;
            Name = name;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
