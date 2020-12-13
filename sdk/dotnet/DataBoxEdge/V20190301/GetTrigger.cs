// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBoxEdge.V20190301
{
    public static class GetTrigger
    {
        public static Task<GetTriggerResult> InvokeAsync(GetTriggerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetTriggerResult>("azure-nextgen:databoxedge/v20190301:getTrigger", args ?? new GetTriggerArgs(), options.WithVersion());
    }


    public sealed class GetTriggerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The device name.
        /// </summary>
        [Input("deviceName", required: true)]
        public string DeviceName { get; set; } = null!;

        /// <summary>
        /// The trigger name.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetTriggerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetTriggerResult
    {
        /// <summary>
        /// The path ID that uniquely identifies the object.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Trigger Kind.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// The object name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The hierarchical type of the object.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetTriggerResult(
            string id,

            string kind,

            string name,

            string type)
        {
            Id = id;
            Kind = kind;
            Name = name;
            Type = type;
        }
    }
}
