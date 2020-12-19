// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest.Outputs
{

    [OutputType]
    public sealed class TriggerDependencyReferenceResponse
    {
        /// <summary>
        /// Referenced trigger.
        /// </summary>
        public readonly Outputs.TriggerReferenceResponse ReferenceTrigger;
        /// <summary>
        /// The type of dependency reference.
        /// Expected value is 'TriggerDependencyReference'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private TriggerDependencyReferenceResponse(
            Outputs.TriggerReferenceResponse referenceTrigger,

            string type)
        {
            ReferenceTrigger = referenceTrigger;
            Type = type;
        }
    }
}
