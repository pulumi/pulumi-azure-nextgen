// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901.Outputs
{

    [OutputType]
    public sealed class DatabaseBackupSettingResponseResult
    {
        /// <summary>
        /// Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
        /// </summary>
        public readonly string? ConnectionString;
        /// <summary>
        /// Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
        /// This is used during restore with overwrite connection strings options.
        /// </summary>
        public readonly string? ConnectionStringName;
        /// <summary>
        /// Database type (e.g. SqlAzure / MySql).
        /// </summary>
        public readonly string DatabaseType;
        public readonly string? Name;

        [OutputConstructor]
        private DatabaseBackupSettingResponseResult(
            string? connectionString,

            string? connectionStringName,

            string databaseType,

            string? name)
        {
            ConnectionString = connectionString;
            ConnectionStringName = connectionStringName;
            DatabaseType = databaseType;
            Name = name;
        }
    }
}