// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20180201
{
    public static class GetWebAppHybridConnectionSlot
    {
        public static Task<GetWebAppHybridConnectionSlotResult> InvokeAsync(GetWebAppHybridConnectionSlotArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppHybridConnectionSlotResult>("azure-nextgen:web/v20180201:getWebAppHybridConnectionSlot", args ?? new GetWebAppHybridConnectionSlotArgs(), options.WithVersion());
    }


    public sealed class GetWebAppHybridConnectionSlotArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the web app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The namespace for this hybrid connection.
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// The relay name for this hybrid connection.
        /// </summary>
        [Input("relayName", required: true)]
        public string RelayName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the slot for the web app.
        /// </summary>
        [Input("slot", required: true)]
        public string Slot { get; set; } = null!;

        public GetWebAppHybridConnectionSlotArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppHybridConnectionSlotResult
    {
        /// <summary>
        /// The hostname of the endpoint.
        /// </summary>
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
        /// <summary>
        /// The port of the endpoint.
        /// </summary>
        public readonly int? Port;
        /// <summary>
        /// The ARM URI to the Service Bus relay.
        /// </summary>
        public readonly string? RelayArmUri;
        /// <summary>
        /// The name of the Service Bus relay.
        /// </summary>
        public readonly string? RelayName;
        /// <summary>
        /// The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
        /// </summary>
        public readonly string? SendKeyName;
        /// <summary>
        /// The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
        /// normally, use the POST /listKeys API instead.
        /// </summary>
        public readonly string? SendKeyValue;
        /// <summary>
        /// The name of the Service Bus namespace.
        /// </summary>
        public readonly string? ServiceBusNamespace;
        /// <summary>
        /// The suffix for the service bus endpoint. By default this is .servicebus.windows.net
        /// </summary>
        public readonly string? ServiceBusSuffix;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWebAppHybridConnectionSlotResult(
            string? hostname,

            string id,

            string? kind,

            string name,

            int? port,

            string? relayArmUri,

            string? relayName,

            string? sendKeyName,

            string? sendKeyValue,

            string? serviceBusNamespace,

            string? serviceBusSuffix,

            string type)
        {
            Hostname = hostname;
            Id = id;
            Kind = kind;
            Name = name;
            Port = port;
            RelayArmUri = relayArmUri;
            RelayName = relayName;
            SendKeyName = sendKeyName;
            SendKeyValue = sendKeyValue;
            ServiceBusNamespace = serviceBusNamespace;
            ServiceBusSuffix = serviceBusSuffix;
            Type = type;
        }
    }
}
