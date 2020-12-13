// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.TimeSeriesInsights.V20170228Preview
{
    public static class GetReferenceDataSet
    {
        public static Task<GetReferenceDataSetResult> InvokeAsync(GetReferenceDataSetArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetReferenceDataSetResult>("azure-nextgen:timeseriesinsights/v20170228preview:getReferenceDataSet", args ?? new GetReferenceDataSetArgs(), options.WithVersion());
    }


    public sealed class GetReferenceDataSetArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Time Series Insights environment associated with the specified resource group.
        /// </summary>
        [Input("environmentName", required: true)]
        public string EnvironmentName { get; set; } = null!;

        /// <summary>
        /// The name of the Time Series Insights reference data set associated with the specified environment.
        /// </summary>
        [Input("referenceDataSetName", required: true)]
        public string ReferenceDataSetName { get; set; } = null!;

        /// <summary>
        /// Name of an Azure Resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetReferenceDataSetArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetReferenceDataSetResult
    {
        /// <summary>
        /// The time the resource was created.
        /// </summary>
        public readonly string CreationTime;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The list of key properties for the reference data set.
        /// </summary>
        public readonly ImmutableArray<Outputs.ReferenceDataSetKeyPropertyResponse> KeyProperties;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provisioning state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetReferenceDataSetResult(
            string creationTime,

            string id,

            ImmutableArray<Outputs.ReferenceDataSetKeyPropertyResponse> keyProperties,

            string location,

            string name,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            CreationTime = creationTime;
            Id = id;
            KeyProperties = keyProperties;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
        }
    }
}
