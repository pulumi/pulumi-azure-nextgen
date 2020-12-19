// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DBforPostgreSQL.V20171201
{
    /// <summary>
    /// Represents a Database.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:dbforpostgresql/v20171201:Database")]
    public partial class Database : Pulumi.CustomResource
    {
        /// <summary>
        /// The charset of the database.
        /// </summary>
        [Output("charset")]
        public Output<string?> Charset { get; private set; } = null!;

        /// <summary>
        /// The collation of the database.
        /// </summary>
        [Output("collation")]
        public Output<string?> Collation { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Database resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Database(string name, DatabaseArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:dbforpostgresql/v20171201:Database", name, args ?? new DatabaseArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Database(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:dbforpostgresql/v20171201:Database", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:dbforpostgresql/latest:Database"},
                    new Pulumi.Alias { Type = "azure-nextgen:dbforpostgresql/v20171201preview:Database"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Database resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Database Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Database(name, id, options);
        }
    }

    public sealed class DatabaseArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The charset of the database.
        /// </summary>
        [Input("charset")]
        public Input<string>? Charset { get; set; }

        /// <summary>
        /// The collation of the database.
        /// </summary>
        [Input("collation")]
        public Input<string>? Collation { get; set; }

        /// <summary>
        /// The name of the database.
        /// </summary>
        [Input("databaseName", required: true)]
        public Input<string> DatabaseName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

        public DatabaseArgs()
        {
        }
    }
}
