// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest
{
    /// <summary>
    /// Linked service resource type.
    /// Latest API Version: 2018-06-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:datafactory/latest:LinkedService")]
    public partial class LinkedService : Pulumi.CustomResource
    {
        /// <summary>
        /// Etag identifies change in the resource.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Properties of linked service.
        /// </summary>
        [Output("properties")]
        public Output<Union<Outputs.AmazonMWSLinkedServiceResponse, Union<Outputs.AmazonRedshiftLinkedServiceResponse, Union<Outputs.AmazonS3LinkedServiceResponse, Union<Outputs.AzureBatchLinkedServiceResponse, Union<Outputs.AzureBlobFSLinkedServiceResponse, Union<Outputs.AzureBlobStorageLinkedServiceResponse, Union<Outputs.AzureDataExplorerLinkedServiceResponse, Union<Outputs.AzureDataLakeAnalyticsLinkedServiceResponse, Union<Outputs.AzureDataLakeStoreLinkedServiceResponse, Union<Outputs.AzureDatabricksDeltaLakeLinkedServiceResponse, Union<Outputs.AzureDatabricksLinkedServiceResponse, Union<Outputs.AzureFileStorageLinkedServiceResponse, Union<Outputs.AzureFunctionLinkedServiceResponse, Union<Outputs.AzureKeyVaultLinkedServiceResponse, Union<Outputs.AzureMLLinkedServiceResponse, Union<Outputs.AzureMLServiceLinkedServiceResponse, Union<Outputs.AzureMariaDBLinkedServiceResponse, Union<Outputs.AzureMySqlLinkedServiceResponse, Union<Outputs.AzurePostgreSqlLinkedServiceResponse, Union<Outputs.AzureSearchLinkedServiceResponse, Union<Outputs.AzureSqlDWLinkedServiceResponse, Union<Outputs.AzureSqlDatabaseLinkedServiceResponse, Union<Outputs.AzureSqlMILinkedServiceResponse, Union<Outputs.AzureStorageLinkedServiceResponse, Union<Outputs.AzureTableStorageLinkedServiceResponse, Union<Outputs.CassandraLinkedServiceResponse, Union<Outputs.CommonDataServiceForAppsLinkedServiceResponse, Union<Outputs.ConcurLinkedServiceResponse, Union<Outputs.CosmosDbLinkedServiceResponse, Union<Outputs.CosmosDbMongoDbApiLinkedServiceResponse, Union<Outputs.CouchbaseLinkedServiceResponse, Union<Outputs.CustomDataSourceLinkedServiceResponse, Union<Outputs.Db2LinkedServiceResponse, Union<Outputs.DrillLinkedServiceResponse, Union<Outputs.DynamicsAXLinkedServiceResponse, Union<Outputs.DynamicsCrmLinkedServiceResponse, Union<Outputs.DynamicsLinkedServiceResponse, Union<Outputs.EloquaLinkedServiceResponse, Union<Outputs.FileServerLinkedServiceResponse, Union<Outputs.FtpServerLinkedServiceResponse, Union<Outputs.GoogleAdWordsLinkedServiceResponse, Union<Outputs.GoogleBigQueryLinkedServiceResponse, Union<Outputs.GoogleCloudStorageLinkedServiceResponse, Union<Outputs.GreenplumLinkedServiceResponse, Union<Outputs.HBaseLinkedServiceResponse, Union<Outputs.HDInsightLinkedServiceResponse, Union<Outputs.HDInsightOnDemandLinkedServiceResponse, Union<Outputs.HdfsLinkedServiceResponse, Union<Outputs.HiveLinkedServiceResponse, Union<Outputs.HttpLinkedServiceResponse, Union<Outputs.HubspotLinkedServiceResponse, Union<Outputs.ImpalaLinkedServiceResponse, Union<Outputs.InformixLinkedServiceResponse, Union<Outputs.JiraLinkedServiceResponse, Union<Outputs.MagentoLinkedServiceResponse, Union<Outputs.MariaDBLinkedServiceResponse, Union<Outputs.MarketoLinkedServiceResponse, Union<Outputs.MicrosoftAccessLinkedServiceResponse, Union<Outputs.MongoDbAtlasLinkedServiceResponse, Union<Outputs.MongoDbLinkedServiceResponse, Union<Outputs.MongoDbV2LinkedServiceResponse, Union<Outputs.MySqlLinkedServiceResponse, Union<Outputs.NetezzaLinkedServiceResponse, Union<Outputs.ODataLinkedServiceResponse, Union<Outputs.OdbcLinkedServiceResponse, Union<Outputs.Office365LinkedServiceResponse, Union<Outputs.OracleLinkedServiceResponse, Union<Outputs.OracleServiceCloudLinkedServiceResponse, Union<Outputs.PaypalLinkedServiceResponse, Union<Outputs.PhoenixLinkedServiceResponse, Union<Outputs.PostgreSqlLinkedServiceResponse, Union<Outputs.PrestoLinkedServiceResponse, Union<Outputs.QuickBooksLinkedServiceResponse, Union<Outputs.ResponsysLinkedServiceResponse, Union<Outputs.RestServiceLinkedServiceResponse, Union<Outputs.SalesforceLinkedServiceResponse, Union<Outputs.SalesforceMarketingCloudLinkedServiceResponse, Union<Outputs.SalesforceServiceCloudLinkedServiceResponse, Union<Outputs.SapBWLinkedServiceResponse, Union<Outputs.SapCloudForCustomerLinkedServiceResponse, Union<Outputs.SapEccLinkedServiceResponse, Union<Outputs.SapHanaLinkedServiceResponse, Union<Outputs.SapOpenHubLinkedServiceResponse, Union<Outputs.SapTableLinkedServiceResponse, Union<Outputs.ServiceNowLinkedServiceResponse, Union<Outputs.SftpServerLinkedServiceResponse, Union<Outputs.SharePointOnlineListLinkedServiceResponse, Union<Outputs.ShopifyLinkedServiceResponse, Union<Outputs.SnowflakeLinkedServiceResponse, Union<Outputs.SparkLinkedServiceResponse, Union<Outputs.SqlServerLinkedServiceResponse, Union<Outputs.SquareLinkedServiceResponse, Union<Outputs.SybaseLinkedServiceResponse, Union<Outputs.TeradataLinkedServiceResponse, Union<Outputs.VerticaLinkedServiceResponse, Union<Outputs.WebLinkedServiceResponse, Union<Outputs.XeroLinkedServiceResponse, Outputs.ZohoLinkedServiceResponse>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Properties { get; private set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a LinkedService resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public LinkedService(string name, LinkedServiceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:datafactory/latest:LinkedService", name, args ?? new LinkedServiceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private LinkedService(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:datafactory/latest:LinkedService", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:datafactory/v20170901preview:LinkedService"},
                    new Pulumi.Alias { Type = "azure-nextgen:datafactory/v20180601:LinkedService"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing LinkedService resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static LinkedService Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new LinkedService(name, id, options);
        }
    }

    public sealed class LinkedServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The factory name.
        /// </summary>
        [Input("factoryName", required: true)]
        public Input<string> FactoryName { get; set; } = null!;

        /// <summary>
        /// The linked service name.
        /// </summary>
        [Input("linkedServiceName", required: true)]
        public Input<string> LinkedServiceName { get; set; } = null!;

        /// <summary>
        /// Properties of linked service.
        /// </summary>
        [Input("properties", required: true)]
        public InputUnion<Inputs.AmazonMWSLinkedServiceArgs, InputUnion<Inputs.AmazonRedshiftLinkedServiceArgs, InputUnion<Inputs.AmazonS3LinkedServiceArgs, InputUnion<Inputs.AzureBatchLinkedServiceArgs, InputUnion<Inputs.AzureBlobFSLinkedServiceArgs, InputUnion<Inputs.AzureBlobStorageLinkedServiceArgs, InputUnion<Inputs.AzureDataExplorerLinkedServiceArgs, InputUnion<Inputs.AzureDataLakeAnalyticsLinkedServiceArgs, InputUnion<Inputs.AzureDataLakeStoreLinkedServiceArgs, InputUnion<Inputs.AzureDatabricksDeltaLakeLinkedServiceArgs, InputUnion<Inputs.AzureDatabricksLinkedServiceArgs, InputUnion<Inputs.AzureFileStorageLinkedServiceArgs, InputUnion<Inputs.AzureFunctionLinkedServiceArgs, InputUnion<Inputs.AzureKeyVaultLinkedServiceArgs, InputUnion<Inputs.AzureMLLinkedServiceArgs, InputUnion<Inputs.AzureMLServiceLinkedServiceArgs, InputUnion<Inputs.AzureMariaDBLinkedServiceArgs, InputUnion<Inputs.AzureMySqlLinkedServiceArgs, InputUnion<Inputs.AzurePostgreSqlLinkedServiceArgs, InputUnion<Inputs.AzureSearchLinkedServiceArgs, InputUnion<Inputs.AzureSqlDWLinkedServiceArgs, InputUnion<Inputs.AzureSqlDatabaseLinkedServiceArgs, InputUnion<Inputs.AzureSqlMILinkedServiceArgs, InputUnion<Inputs.AzureStorageLinkedServiceArgs, InputUnion<Inputs.AzureTableStorageLinkedServiceArgs, InputUnion<Inputs.CassandraLinkedServiceArgs, InputUnion<Inputs.CommonDataServiceForAppsLinkedServiceArgs, InputUnion<Inputs.ConcurLinkedServiceArgs, InputUnion<Inputs.CosmosDbLinkedServiceArgs, InputUnion<Inputs.CosmosDbMongoDbApiLinkedServiceArgs, InputUnion<Inputs.CouchbaseLinkedServiceArgs, InputUnion<Inputs.CustomDataSourceLinkedServiceArgs, InputUnion<Inputs.Db2LinkedServiceArgs, InputUnion<Inputs.DrillLinkedServiceArgs, InputUnion<Inputs.DynamicsAXLinkedServiceArgs, InputUnion<Inputs.DynamicsCrmLinkedServiceArgs, InputUnion<Inputs.DynamicsLinkedServiceArgs, InputUnion<Inputs.EloquaLinkedServiceArgs, InputUnion<Inputs.FileServerLinkedServiceArgs, InputUnion<Inputs.FtpServerLinkedServiceArgs, InputUnion<Inputs.GoogleAdWordsLinkedServiceArgs, InputUnion<Inputs.GoogleBigQueryLinkedServiceArgs, InputUnion<Inputs.GoogleCloudStorageLinkedServiceArgs, InputUnion<Inputs.GreenplumLinkedServiceArgs, InputUnion<Inputs.HBaseLinkedServiceArgs, InputUnion<Inputs.HDInsightLinkedServiceArgs, InputUnion<Inputs.HDInsightOnDemandLinkedServiceArgs, InputUnion<Inputs.HdfsLinkedServiceArgs, InputUnion<Inputs.HiveLinkedServiceArgs, InputUnion<Inputs.HttpLinkedServiceArgs, InputUnion<Inputs.HubspotLinkedServiceArgs, InputUnion<Inputs.ImpalaLinkedServiceArgs, InputUnion<Inputs.InformixLinkedServiceArgs, InputUnion<Inputs.JiraLinkedServiceArgs, InputUnion<Inputs.MagentoLinkedServiceArgs, InputUnion<Inputs.MariaDBLinkedServiceArgs, InputUnion<Inputs.MarketoLinkedServiceArgs, InputUnion<Inputs.MicrosoftAccessLinkedServiceArgs, InputUnion<Inputs.MongoDbAtlasLinkedServiceArgs, InputUnion<Inputs.MongoDbLinkedServiceArgs, InputUnion<Inputs.MongoDbV2LinkedServiceArgs, InputUnion<Inputs.MySqlLinkedServiceArgs, InputUnion<Inputs.NetezzaLinkedServiceArgs, InputUnion<Inputs.ODataLinkedServiceArgs, InputUnion<Inputs.OdbcLinkedServiceArgs, InputUnion<Inputs.Office365LinkedServiceArgs, InputUnion<Inputs.OracleLinkedServiceArgs, InputUnion<Inputs.OracleServiceCloudLinkedServiceArgs, InputUnion<Inputs.PaypalLinkedServiceArgs, InputUnion<Inputs.PhoenixLinkedServiceArgs, InputUnion<Inputs.PostgreSqlLinkedServiceArgs, InputUnion<Inputs.PrestoLinkedServiceArgs, InputUnion<Inputs.QuickBooksLinkedServiceArgs, InputUnion<Inputs.ResponsysLinkedServiceArgs, InputUnion<Inputs.RestServiceLinkedServiceArgs, InputUnion<Inputs.SalesforceLinkedServiceArgs, InputUnion<Inputs.SalesforceMarketingCloudLinkedServiceArgs, InputUnion<Inputs.SalesforceServiceCloudLinkedServiceArgs, InputUnion<Inputs.SapBWLinkedServiceArgs, InputUnion<Inputs.SapCloudForCustomerLinkedServiceArgs, InputUnion<Inputs.SapEccLinkedServiceArgs, InputUnion<Inputs.SapHanaLinkedServiceArgs, InputUnion<Inputs.SapOpenHubLinkedServiceArgs, InputUnion<Inputs.SapTableLinkedServiceArgs, InputUnion<Inputs.ServiceNowLinkedServiceArgs, InputUnion<Inputs.SftpServerLinkedServiceArgs, InputUnion<Inputs.SharePointOnlineListLinkedServiceArgs, InputUnion<Inputs.ShopifyLinkedServiceArgs, InputUnion<Inputs.SnowflakeLinkedServiceArgs, InputUnion<Inputs.SparkLinkedServiceArgs, InputUnion<Inputs.SqlServerLinkedServiceArgs, InputUnion<Inputs.SquareLinkedServiceArgs, InputUnion<Inputs.SybaseLinkedServiceArgs, InputUnion<Inputs.TeradataLinkedServiceArgs, InputUnion<Inputs.VerticaLinkedServiceArgs, InputUnion<Inputs.WebLinkedServiceArgs, InputUnion<Inputs.XeroLinkedServiceArgs, Inputs.ZohoLinkedServiceArgs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Properties { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public LinkedServiceArgs()
        {
        }
    }
}
