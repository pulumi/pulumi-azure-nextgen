// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20200101Preview.Inputs
{

    /// <summary>
    /// Information about the webhook destination for an event subscription
    /// </summary>
    public sealed class WebHookEventSubscriptionDestinationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
        /// </summary>
        [Input("azureActiveDirectoryApplicationIdOrUri")]
        public Input<string>? AzureActiveDirectoryApplicationIdOrUri { get; set; }

        /// <summary>
        /// The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
        /// </summary>
        [Input("azureActiveDirectoryTenantId")]
        public Input<string>? AzureActiveDirectoryTenantId { get; set; }

        /// <summary>
        /// Type of the endpoint for the event subscription destination
        /// Expected value is 'WebHook'.
        /// </summary>
        [Input("endpointType", required: true)]
        public Input<string> EndpointType { get; set; } = null!;

        /// <summary>
        /// The URL that represents the endpoint of the destination of an event subscription.
        /// </summary>
        [Input("endpointUrl")]
        public Input<string>? EndpointUrl { get; set; }

        /// <summary>
        /// Maximum number of events per batch.
        /// </summary>
        [Input("maxEventsPerBatch")]
        public Input<int>? MaxEventsPerBatch { get; set; }

        /// <summary>
        /// Preferred batch size in Kilobytes.
        /// </summary>
        [Input("preferredBatchSizeInKilobytes")]
        public Input<int>? PreferredBatchSizeInKilobytes { get; set; }

        public WebHookEventSubscriptionDestinationArgs()
        {
        }
    }
}
