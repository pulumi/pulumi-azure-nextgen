// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.Latest.Inputs
{

    /// <summary>
    /// Cosmos DB SQL trigger resource object
    /// </summary>
    public sealed class SqlTriggerResourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Body of the Trigger
        /// </summary>
        [Input("body")]
        public Input<string>? Body { get; set; }

        /// <summary>
        /// Name of the Cosmos DB SQL trigger
        /// </summary>
        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        /// <summary>
        /// The operation the trigger is associated with
        /// </summary>
        [Input("triggerOperation")]
        public InputUnion<string, Pulumi.AzureNextGen.DocumentDB.Latest.TriggerOperation>? TriggerOperation { get; set; }

        /// <summary>
        /// Type of the Trigger
        /// </summary>
        [Input("triggerType")]
        public InputUnion<string, Pulumi.AzureNextGen.DocumentDB.Latest.TriggerType>? TriggerType { get; set; }

        public SqlTriggerResourceArgs()
        {
        }
    }
}
