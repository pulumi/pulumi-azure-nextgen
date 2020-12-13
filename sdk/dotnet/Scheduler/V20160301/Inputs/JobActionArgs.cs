// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Scheduler.V20160301.Inputs
{

    public sealed class JobActionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Gets or sets the error action.
        /// </summary>
        [Input("errorAction")]
        public Input<Inputs.JobErrorActionArgs>? ErrorAction { get; set; }

        /// <summary>
        /// Gets or sets the storage queue message.
        /// </summary>
        [Input("queueMessage")]
        public Input<Inputs.StorageQueueMessageArgs>? QueueMessage { get; set; }

        /// <summary>
        /// Gets or sets the http requests.
        /// </summary>
        [Input("request")]
        public Input<Inputs.HttpRequestArgs>? Request { get; set; }

        /// <summary>
        /// Gets or sets the retry policy.
        /// </summary>
        [Input("retryPolicy")]
        public Input<Inputs.RetryPolicyArgs>? RetryPolicy { get; set; }

        /// <summary>
        /// Gets or sets the service bus queue message.
        /// </summary>
        [Input("serviceBusQueueMessage")]
        public Input<Inputs.ServiceBusQueueMessageArgs>? ServiceBusQueueMessage { get; set; }

        /// <summary>
        /// Gets or sets the service bus topic message.
        /// </summary>
        [Input("serviceBusTopicMessage")]
        public Input<Inputs.ServiceBusTopicMessageArgs>? ServiceBusTopicMessage { get; set; }

        /// <summary>
        /// Gets or sets the job action type.
        /// </summary>
        [Input("type")]
        public Input<Pulumi.AzureNextGen.Scheduler.V20160301.JobActionType>? Type { get; set; }

        public JobActionArgs()
        {
        }
    }
}
