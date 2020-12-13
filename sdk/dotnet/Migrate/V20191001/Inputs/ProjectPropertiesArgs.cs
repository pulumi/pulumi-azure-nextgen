// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Migrate.V20191001.Inputs
{

    /// <summary>
    /// Properties of a project.
    /// </summary>
    public sealed class ProjectPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
        /// </summary>
        [Input("assessmentSolutionId")]
        public Input<string>? AssessmentSolutionId { get; set; }

        /// <summary>
        /// The ARM id of service map workspace created by customer.
        /// </summary>
        [Input("customerWorkspaceId")]
        public Input<string>? CustomerWorkspaceId { get; set; }

        /// <summary>
        /// Location of service map workspace created by customer.
        /// </summary>
        [Input("customerWorkspaceLocation")]
        public Input<string>? CustomerWorkspaceLocation { get; set; }

        /// <summary>
        /// Assessment project status.
        /// </summary>
        [Input("projectStatus")]
        public InputUnion<string, Pulumi.AzureNextGen.Migrate.V20191001.ProjectStatus>? ProjectStatus { get; set; }

        public ProjectPropertiesArgs()
        {
        }
    }
}
