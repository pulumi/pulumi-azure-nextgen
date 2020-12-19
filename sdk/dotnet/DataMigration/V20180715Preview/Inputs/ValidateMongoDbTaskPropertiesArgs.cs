// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180715Preview.Inputs
{

    /// <summary>
    /// Properties for the task that validates a migration between MongoDB data sources
    /// </summary>
    public sealed class ValidateMongoDbTaskPropertiesArgs : Pulumi.ResourceArgs
    {
        [Input("clientData")]
        private InputMap<string>? _clientData;

        /// <summary>
        /// Key value pairs of client data to attach meta data information to task
        /// </summary>
        public InputMap<string> ClientData
        {
            get => _clientData ?? (_clientData = new InputMap<string>());
            set => _clientData = value;
        }

        /// <summary>
        /// Describes how a MongoDB data migration should be performed
        /// </summary>
        [Input("input")]
        public Input<Inputs.MongoDbMigrationSettingsArgs>? Input { get; set; }

        /// <summary>
        /// Task type.
        /// Expected value is 'Validate.MongoDb'.
        /// </summary>
        [Input("taskType", required: true)]
        public Input<string> TaskType { get; set; } = null!;

        public ValidateMongoDbTaskPropertiesArgs()
        {
        }
    }
}
