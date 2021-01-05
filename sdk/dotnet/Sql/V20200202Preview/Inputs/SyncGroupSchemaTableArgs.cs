// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview.Inputs
{

    /// <summary>
    /// Properties of table in sync group schema.
    /// </summary>
    public sealed class SyncGroupSchemaTableArgs : Pulumi.ResourceArgs
    {
        [Input("columns")]
        private InputList<Inputs.SyncGroupSchemaTableColumnArgs>? _columns;

        /// <summary>
        /// List of columns in sync group schema.
        /// </summary>
        public InputList<Inputs.SyncGroupSchemaTableColumnArgs> Columns
        {
            get => _columns ?? (_columns = new InputList<Inputs.SyncGroupSchemaTableColumnArgs>());
            set => _columns = value;
        }

        /// <summary>
        /// Quoted name of sync group schema table.
        /// </summary>
        [Input("quotedName")]
        public Input<string>? QuotedName { get; set; }

        public SyncGroupSchemaTableArgs()
        {
        }
    }
}