// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101.Inputs
{

    /// <summary>
    /// Database backup settings.
    /// </summary>
    public sealed class DatabaseBackupSettingArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
        /// </summary>
        [Input("connectionString")]
        public string? ConnectionString { get; set; }

        /// <summary>
        /// Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
        /// This is used during restore with overwrite connection strings options.
        /// </summary>
        [Input("connectionStringName")]
        public string? ConnectionStringName { get; set; }

        /// <summary>
        /// Database type (e.g. SqlAzure / MySql).
        /// </summary>
        [Input("databaseType", required: true)]
        public Union<string, Pulumi.AzureNextGen.Web.V20181101.DatabaseType> DatabaseType { get; set; } = null!;

        [Input("name")]
        public string? Name { get; set; }

        public DatabaseBackupSettingArgs()
        {
        }
    }
}
