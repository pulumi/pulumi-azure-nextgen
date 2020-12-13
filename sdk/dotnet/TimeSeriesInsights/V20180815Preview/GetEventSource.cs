// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.TimeSeriesInsights.V20180815Preview
{
    public static class GetEventSource
    {
        public static Task<GetEventSourceResult> InvokeAsync(GetEventSourceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetEventSourceResult>("azure-nextgen:timeseriesinsights/v20180815preview:getEventSource", args ?? new GetEventSourceArgs(), options.WithVersion());
    }


    public sealed class GetEventSourceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Time Series Insights environment associated with the specified resource group.
        /// </summary>
        [Input("environmentName", required: true)]
        public string EnvironmentName { get; set; } = null!;

        /// <summary>
        /// The name of the Time Series Insights event source associated with the specified environment.
        /// </summary>
        [Input("eventSourceName", required: true)]
        public string EventSourceName { get; set; } = null!;

        /// <summary>
        /// Name of an Azure Resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetEventSourceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetEventSourceResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The kind of the event source.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetEventSourceResult(
            string id,

            string kind,

            string location,

            string name,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Kind = kind;
            Location = location;
            Name = name;
            Tags = tags;
            Type = type;
        }
    }
}
