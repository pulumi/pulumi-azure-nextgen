// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataShare.Latest
{
    public static class GetDataSetMapping
    {
        public static Task<GetDataSetMappingResult> InvokeAsync(GetDataSetMappingArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDataSetMappingResult>("azure-nextgen:datashare/latest:getDataSetMapping", args ?? new GetDataSetMappingArgs(), options.WithVersion());
    }


    public sealed class GetDataSetMappingArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the share account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the dataSetMapping.
        /// </summary>
        [Input("dataSetMappingName", required: true)]
        public string DataSetMappingName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the shareSubscription.
        /// </summary>
        [Input("shareSubscriptionName", required: true)]
        public string ShareSubscriptionName { get; set; } = null!;

        public GetDataSetMappingArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDataSetMappingResult
    {
        /// <summary>
        /// The resource id of the azure resource
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of data set mapping.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// Name of the azure resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Type of the azure resource
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDataSetMappingResult(
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
