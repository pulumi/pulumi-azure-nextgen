// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101
{
    public static class GetWebAppSwiftVirtualNetworkConnection
    {
        public static Task<GetWebAppSwiftVirtualNetworkConnectionResult> InvokeAsync(GetWebAppSwiftVirtualNetworkConnectionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppSwiftVirtualNetworkConnectionResult>("azure-nextgen:web/v20181101:getWebAppSwiftVirtualNetworkConnection", args ?? new GetWebAppSwiftVirtualNetworkConnectionArgs(), options.WithVersion());
    }


    public sealed class GetWebAppSwiftVirtualNetworkConnectionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetWebAppSwiftVirtualNetworkConnectionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppSwiftVirtualNetworkConnectionResult
    {
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
        /// </summary>
        public readonly string? SubnetResourceId;
        /// <summary>
        /// A flag that specifies if the scale unit this Web App is on supports Swift integration.
        /// </summary>
        public readonly bool? SwiftSupported;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWebAppSwiftVirtualNetworkConnectionResult(
            string id,

            string? kind,

            string name,

            string? subnetResourceId,

            bool? swiftSupported,

            string type)
        {
            Id = id;
            Kind = kind;
            Name = name;
            SubnetResourceId = subnetResourceId;
            SwiftSupported = swiftSupported;
            Type = type;
        }
    }
}
