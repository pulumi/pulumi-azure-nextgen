// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.Latest
{
    /// <summary>
    /// A task resource
    /// Latest API Version: 2018-04-19.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:datamigration/latest:Task")]
    public partial class Task : Pulumi.CustomResource
    {
        /// <summary>
        /// HTTP strong entity tag value. This is ignored if submitted.
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Custom task properties
        /// </summary>
        [Output("properties")]
        public Output<Union<Outputs.ConnectToSourcePostgreSqlSyncTaskPropertiesResponse, Union<Outputs.ConnectToSourceSqlServerSyncTaskPropertiesResponse, Union<Outputs.ConnectToSourceSqlServerTaskPropertiesResponse, Union<Outputs.ConnectToTargetAzureDbForMySqlTaskPropertiesResponse, Union<Outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlDbTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlMISyncTaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlMITaskPropertiesResponse, Union<Outputs.ConnectToTargetSqlSqlDbSyncTaskPropertiesResponse, Union<Outputs.GetTdeCertificatesSqlTaskPropertiesResponse, Union<Outputs.GetUserTablesSqlSyncTaskPropertiesResponse, Union<Outputs.GetUserTablesSqlTaskPropertiesResponse, Union<Outputs.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesResponse, Union<Outputs.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlDbSyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlDbTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlMISyncTaskPropertiesResponse, Union<Outputs.MigrateSqlServerSqlMITaskPropertiesResponse, Union<Outputs.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesResponse, Union<Outputs.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesResponse, Outputs.ValidateMigrationInputSqlServerSqlMITaskPropertiesResponse>>>>>>>>>>>>>>>>>>>>> Properties { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Task resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Task(string name, TaskArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:datamigration/latest:Task", name, args ?? new TaskArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Task(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:datamigration/latest:Task", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20171115preview:Task"},
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20180315preview:Task"},
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20180331preview:Task"},
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20180419:Task"},
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20180715preview:Task"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Task resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Task Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Task(name, id, options);
        }
    }

    public sealed class TaskArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// HTTP strong entity tag value. This is ignored if submitted.
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// Name of the resource group
        /// </summary>
        [Input("groupName", required: true)]
        public Input<string> GroupName { get; set; } = null!;

        /// <summary>
        /// Name of the project
        /// </summary>
        [Input("projectName", required: true)]
        public Input<string> ProjectName { get; set; } = null!;

        /// <summary>
        /// Custom task properties
        /// </summary>
        [Input("properties")]
        public InputUnion<Inputs.ConnectToSourcePostgreSqlSyncTaskPropertiesArgs, InputUnion<Inputs.ConnectToSourceSqlServerSyncTaskPropertiesArgs, InputUnion<Inputs.ConnectToSourceSqlServerTaskPropertiesArgs, InputUnion<Inputs.ConnectToTargetAzureDbForMySqlTaskPropertiesArgs, InputUnion<Inputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesArgs, InputUnion<Inputs.ConnectToTargetSqlDbTaskPropertiesArgs, InputUnion<Inputs.ConnectToTargetSqlMISyncTaskPropertiesArgs, InputUnion<Inputs.ConnectToTargetSqlMITaskPropertiesArgs, InputUnion<Inputs.ConnectToTargetSqlSqlDbSyncTaskPropertiesArgs, InputUnion<Inputs.GetTdeCertificatesSqlTaskPropertiesArgs, InputUnion<Inputs.GetUserTablesSqlSyncTaskPropertiesArgs, InputUnion<Inputs.GetUserTablesSqlTaskPropertiesArgs, InputUnion<Inputs.MigrateMySqlAzureDbForMySqlSyncTaskPropertiesArgs, InputUnion<Inputs.MigratePostgreSqlAzureDbForPostgreSqlSyncTaskPropertiesArgs, InputUnion<Inputs.MigrateSqlServerSqlDbSyncTaskPropertiesArgs, InputUnion<Inputs.MigrateSqlServerSqlDbTaskPropertiesArgs, InputUnion<Inputs.MigrateSqlServerSqlMISyncTaskPropertiesArgs, InputUnion<Inputs.MigrateSqlServerSqlMITaskPropertiesArgs, InputUnion<Inputs.ValidateMigrationInputSqlServerSqlDbSyncTaskPropertiesArgs, InputUnion<Inputs.ValidateMigrationInputSqlServerSqlMISyncTaskPropertiesArgs, Inputs.ValidateMigrationInputSqlServerSqlMITaskPropertiesArgs>>>>>>>>>>>>>>>>>>>>? Properties { get; set; }

        /// <summary>
        /// Name of the service
        /// </summary>
        [Input("serviceName", required: true)]
        public Input<string> ServiceName { get; set; } = null!;

        /// <summary>
        /// Name of the Task
        /// </summary>
        [Input("taskName", required: true)]
        public Input<string> TaskName { get; set; } = null!;

        public TaskArgs()
        {
        }
    }
}
