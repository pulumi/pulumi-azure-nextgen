// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.Latest
{
    public static class GetWebAppRelayServiceConnectionSlot
    {
        public static Task<GetWebAppRelayServiceConnectionSlotResult> InvokeAsync(GetWebAppRelayServiceConnectionSlotArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppRelayServiceConnectionSlotResult>("azure-nextgen:web/latest:getWebAppRelayServiceConnectionSlot", args ?? new GetWebAppRelayServiceConnectionSlotArgs(), options.WithVersion());
    }


    public sealed class GetWebAppRelayServiceConnectionSlotArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the hybrid connection.
        /// </summary>
        [Input("entityName", required: true)]
        public string EntityName { get; set; } = null!;

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

        /// <summary>
        /// Name of the deployment slot. If a slot is not specified, the API will get a hybrid connection for the production slot.
        /// </summary>
        [Input("slot", required: true)]
        public string Slot { get; set; } = null!;

        public GetWebAppRelayServiceConnectionSlotArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppRelayServiceConnectionSlotResult
    {
        public readonly string? BiztalkUri;
        public readonly string? EntityConnectionString;
        public readonly string? EntityName;
        public readonly string? Hostname;
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
        public readonly int? Port;
        public readonly string? ResourceConnectionString;
        public readonly string? ResourceType;
        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWebAppRelayServiceConnectionSlotResult(
            string? biztalkUri,

            string? entityConnectionString,

            string? entityName,

            string? hostname,

            string id,

            string? kind,

            string name,

            int? port,

            string? resourceConnectionString,

            string? resourceType,

            Outputs.SystemDataResponse systemData,

            string type)
        {
            BiztalkUri = biztalkUri;
            EntityConnectionString = entityConnectionString;
            EntityName = entityName;
            Hostname = hostname;
            Id = id;
            Kind = kind;
            Name = name;
            Port = port;
            ResourceConnectionString = resourceConnectionString;
            ResourceType = resourceType;
            SystemData = systemData;
            Type = type;
        }
    }
}
