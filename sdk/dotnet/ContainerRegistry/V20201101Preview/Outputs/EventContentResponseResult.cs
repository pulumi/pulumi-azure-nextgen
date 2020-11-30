// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20201101Preview.Outputs
{

    [OutputType]
    public sealed class EventContentResponseResult
    {
        /// <summary>
        /// The action that encompasses the provided event.
        /// </summary>
        public readonly string? Action;
        /// <summary>
        /// The agent that initiated the event. For most situations, this could be from the authorization context of the request.
        /// </summary>
        public readonly Outputs.ActorResponseResult? Actor;
        /// <summary>
        /// The event ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The request that generated the event.
        /// </summary>
        public readonly Outputs.RequestResponseResult? Request;
        /// <summary>
        /// The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
        /// </summary>
        public readonly Outputs.SourceResponseResult? Source;
        /// <summary>
        /// The target of the event.
        /// </summary>
        public readonly Outputs.TargetResponseResult? Target;
        /// <summary>
        /// The time at which the event occurred.
        /// </summary>
        public readonly string? Timestamp;

        [OutputConstructor]
        private EventContentResponseResult(
            string? action,

            Outputs.ActorResponseResult? actor,

            string? id,

            Outputs.RequestResponseResult? request,

            Outputs.SourceResponseResult? source,

            Outputs.TargetResponseResult? target,

            string? timestamp)
        {
            Action = action;
            Actor = actor;
            Id = id;
            Request = request;
            Source = source;
            Target = target;
            Timestamp = timestamp;
        }
    }
}
